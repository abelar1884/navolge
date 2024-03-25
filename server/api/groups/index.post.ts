import { Prisma } from '@prisma/client'
import db from '~/lib/db'

export default defineEventHandler(async (request) => {
  const { name } = await readBody(request)
  try {
    await db.group.create({
      data: {
        name
      }
    })
    return null
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      console.log(e.code)
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
