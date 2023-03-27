module.exports = ({ actions }) => {
  const { createTypes } = actions

  // The purpose of ProfileYaml is to make optional the required fields from
  // the base theme which we no longer use.
  // The 'image' and 'budget' fields are not included, because they define
  // interfaces(?) and I can't quite get them to work – this means that they
  // remain required. For image this is actually desired, but budget this means
  // the yaml must contain filler fields
  // This also means we cannot use @dontInfer for the ProfileYaml type.

  const typeDefs = `
    type ProfileYaml implements Node {
      company: String
      focus: String
      skills: [String]
      for_hire: Boolean!
      relocation: Boolean!
      about: String
      institution: String!
      research_focus: String!
      focus_url: String
      initials: String!
      location: String!
      name: String!
      profession: String!
      topics: [String!]!
      tools: [String!]
    }

    type AcademicHistoryYaml implements Node @dontInfer {
      group: String!
      group_url: String
      department: String
      institution: String
      institution_url: String
      period: String
      position: String
    }

    type PapersYaml implements Node @dontInfer {
      authors: [String!]!
      title: String!
      journal: String!
      date: String!
      doi: String
      url: String
      pdf: String
      tags: [String]
    }

    type TeachingYaml implements Node @dontInfer {
      title: String!
      kind: String
      format: String
      length: String
      url: String
      description: String
      date: String
      image: File @fileByRelativePath
    }

  `

  createTypes(typeDefs)
}