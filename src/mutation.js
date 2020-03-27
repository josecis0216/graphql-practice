import { idArg, mutationType, stringArg } from 'nexus'

// export const Mutation = mutationType({
//     name: 'Mutation',
//     definition(t) {

//         t.crud.deleteOneCourse()


//         t.field('createCourse', {
//             type: 'Course',
//             args: {
//                 name: stringArg({ nullable: false }),
//                 description: stringArg(),
//                 defaultCredits: stringArg(),
//                 courseCode: stringArg({ nullable: false }),
//                 termsOffered: stringArg(),
//             },
//             resolve: (parent, { name, description, defaultCredits, courseCode, termsOffered }, ctx) => {
//                 return ctx.prisma.course.create({
//                     data: {
//                         name,
//                         description,
//                         defaultCredits,
//                         courseCode,
//                         termsOffered,
//                     }
//                 })
//             }
//         })

//         t.field('updateCourse', {
//             type: 'Course',
//             args: { id: idArg(),
//                 name: stringArg(),
//                 description: stringArg(),
//                 courseCode: stringArg(),
//                 termsOffered: stringArg(),
//             },
//             resolve: (parent, { id, name, description, defaultCredits, courseCoode, termsOffered }, ctx) => {
//                 return ctx.prisma.course.update({
//                     where: {
//                         id
//                     },
//                     data: {
//                         name,
//                         description,
//                         defaultCredits,
//                         courseCode,
//                         termsOffered,
//                     }
//                 })
//             }
//         })
//     }
// })

export const Mutation = mutationType({
    name: 'Mutation',
    definition(t) {

        t.crud.deleteOnePlayer()


        t.field('createPlayer', {
            type: 'Player',
            args: {
                name: stringArg({ nullable: false }),
                position: stringArg({ nullable: false }),
                dob: stringArg(),
                nationality: stringArg(),
                currentTeam: stringArg(),
                jerseyNumber: stringArg(),
            },
            resolve: (parent, { name, position, dob, nationality, currentTeam, jerseyNumber }, ctx) => {
                return ctx.prisma.player.create({
                    data: {
                        name,
                        position,
                        dob,
                        nationality,
                        currentTeam,
                        jerseyNumber,
                    }
                })
            }
        })

        t.field('updatePlayer', {
            type: 'Player',
            args: { id: idArg(),
                name: stringArg(),
                position: stringArg(),
                currentTeam: stringArg(),
                jerseyNumber: stringArg(),
            },
            resolve: (parent, { id, name, position, dob, nationality, currentTeam, jerseyNumber }, ctx) => {
                return ctx.prisma.player.update({
                    where: {
                        id
                    },
                    data: {
                        name,
                        position,
                        currentTeam,
                        jerseyNumber,
                    }
                })
            }
        })
    }
})