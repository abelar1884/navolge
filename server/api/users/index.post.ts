import { Prisma } from '@prisma/client'
import db from '~/lib/db'

export default defineEventHandler(async (event) => {
  const { name, email } = await readBody(event)
  try {
    const user = await db.user.create({
      data: {
        name,
        email
      }
    })
    return user
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      // The .code property can be accessed in a type-safe manner
      if (e.code === 'P2002') {
        throw createError({
          statusCode: 422,
          statusMessage: 'Пользователь с таким email уже зарегистрирован'
        })
      }
    }
  }
})
