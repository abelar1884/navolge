import { Prisma } from '@prisma/client'
import db from '~/lib/db'

export default defineEventHandler(async () => {
  // const { name, email } = await readBody(event)
  try {
    const user = await db.group.findMany()
    return user
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (e.code === 'P2002') {
        throw createError({
          statusCode: 422,
          statusMessage: 'Хуй в рот'
        })
      }
    }
  }
})
