import { idArg, queryType, stringArg } from 'nexus'

// export const Query = queryType({
//   name: "Query",
//   definition(t) {
//     t.field('Course', {
//       type: 'Course',
//       nullable: true,
//       args: { id: idArg() },
//       resolve: (parent, { id }, ctx) => {
//         return ctx.prisma.course.findOne({
//           where: {
//             id,
//           },
//         })
//       }
//     })

//     t.list.field('Courses', {
//       type: 'Course',
//       args: {
//         searchString: stringArg({ nullable: true}),
//       },
//       resolve: (parent, { searchString }, ctx) => {
//         return ctx.prisma.course.findMany({
//           where: {
//             OR: [
//               { name: { contains: searchString }},
//               { description: { contains: searchString }}
//             ],
//           },
//         })
//       }
//     })

//   }
// })

export const Query = queryType({
  name: "Query",
  definition(t) {
    t.field('Player', {
      type: 'Player',
      nullable: true,
      args: { id: idArg() },
      resolve: (parent, { id }, ctx) => {
        return ctx.prisma.player.findOne({
          where: {
            id,
          },
        })
      }
    })

    t.list.field('Players', {
      type: 'Player',
      args: {
        searchString: stringArg({ nullable: true}),
      },
      resolve: (parent, { searchString }, ctx) => {
        return ctx.prisma.player.findMany({
          where: {
            OR: [
              { name: { contains: searchString }}
            ],
          },
        })
      }
    })

  }
})