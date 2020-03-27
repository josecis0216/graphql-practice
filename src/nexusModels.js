import { objectType } from 'nexus'

const Course = objectType({
  name: 'Course',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.name()
    t.model.description()
    t.model.defaultCredits()
    t.model.courseCode()
    t.model.termsOffered()
  }
})

const Player = objectType({
  name: 'Player',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.updatedAt()
    t.model.name()
    t.model.first()
    t.model.position()
    t.model.dob()
    t.model.nationality()
    t.model.jerseyNumber()
  }
})

export const Models = [
  Course,
  Player
]