import { PrismaClient } from '@prisma/client'
import fs from 'fs'

const prismaClient = new PrismaClient()

const uvu_courses = fs.readFileSync('prisma/example_files/uvu_courses.json')
const soccer_player = fs.readFileSync('prisma/example_files/players.json')

function loadPlayers() {
  const catalog = JSON.parse(soccer_player)
  const allPlayers = catalog.league.player
  return allPlayers.map(plr => {
    return {
      data: {
        name: plr.name._text,
        first: plr.firstName._text,
        position: plr.position._text,
        dob: plr.dateOfBirth._text,
        nationality: plr.nationality._text,
        jerseyNumber: plr.shirtNumber._text
      },
    }
  })
}

function loadUVUCourses() {
  const catalog = JSON.parse(uvu_courses)
  const allCourses = catalog.comet.course
  const dgmCourses = allCourses.filter(
    course =>
      course.prefix._text === 'DGM' ||
      course.prefix._text === 'CS' ||
      course.prefix._text === 'IT' ||
      course.prefix._text === 'INFO',
  )
  return dgmCourses.map(crs => {
    return {
      data: {
        name: crs.title._text,
        description: crs.description._text,
        defaultCredits: crs.totalCredits._text,
        courseCode: `${crs.prefix._text} ${crs.number._text}`,
        termsOffered: crs.termsOffered._text || "Fall",
      },
    }
  })
}

/* async function createCourse() {
  try {
    await prismaClient.course.create({
      data: {
        name: 'Rich Internet Applications II',
        description:
          'Most useful DGM course ever created.  Taught by the most brilliant yet humble professor to ever grace the hallways of UVU.',
        defaultCredits: '3',
        courseCode: 'DGM 4790',
        termsOffered: 'Spring',
      },
    })
  } catch (err) {
    console.log(err)
  }
} */

// async function main() {
//   try {
//     const allCourses = loadUVUCourses()
//     for (let crs of allCourses) {
//       await prismaClient.course.create(crs)
//       .catch(err => console.log(`Error trying to create UVU courses: ${err} course ${crs}`))
//     }
//   } catch (err) {
//     console.log(err)
//   }
// }

async function main() {
  try {
    const allPlayers = loadPlayers()
    for (let plr of allPlayers) {
      await prismaClient.player.create(plr)
      .catch(err => console.log(`Error trying to create soccer player: ${err} course ${plr}`))
    }
  } catch (err) {
    console.log(err)
  }
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prismaClient.disconnect()
  })
