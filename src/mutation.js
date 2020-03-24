import { idArg, mutationType, stringArg } from 'nexus'


export const Mutation = mutationType({
  name: 'Mutation',
  definition(t) {
    
    t.crud.deleteOneCourse()

    t.field('createCourse', {
      type: 'Course',
      args: {
        name: stringArg({ nullable: false }),
        description: stringArg(),
        defaultCredits: stringArg(),
        courseCode: stringArg( { nullable: false }),
        termsOffered: stringArg(),
      },
      resolve: (_, { name, description, defaultCredits, courseCode, termsOffered }, ctx) => {
        return ctx.prisma.course.create({
          data: {
            name,
            description,
            defaultCredits,
            courseCode,
            termsOffered
          },
        })
      },
    })
  }
})