import { idARg, mutationType, stringArg } from 'nexus'

export const Mutation = mutationType({
    name: 'Mutation',
    definition(t) {
        t.field('creatCourse', {
            type: 'Course',
            args: {
                name: stringArg({ nullable: false }),
                description: stringArg(),
                courseCode: stringArg({ nullable: false }),
                termsOffered: stringArg(),
            },
            resolve: (parent, { name, description, defaultCredits, courseCoode, termsOffered }, ctx) => {
                return ctx.prisma.course.create({
                    data: {
                        name,
                        description,
                        defaultCredits,
                        courseCode,
                        termsOffered,
                    }
                })
            }
        })
    }
})