import { TFormation, TModule } from "../config/types";

export const modules: TModule[] = [
  {
    id: 'mod1',
    title: 'module 1',
    completed: false,
    lastFoundSupport: null,
    puzzlePieces: [
      {
        id: 'puzzle1',
        found: false
      },
      {
        id: 'puzzle2',
        found: false
      },
      {
        id: 'puzzle3',
        found: false
      }
    ],
    supports: [
      {
        id: 'supp1',
        label: 'support 1',
        found: false,
        file: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
      },
      {
        id: 'supp2',
        label: 'support 2',
        found: false,
        file: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
      }
    ]
  },
  {
    id: 'mod2',
    title: 'module 2',
    completed: false,
    lastFoundSupport: null,
    puzzlePieces: [],
    supports: [
      {
        id: 'supp3',
        label: 'support 1',
        found: false,
        file: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
      },
    ]
  }
]


export const formation: TFormation = {
  grade: 0,
  modules: modules,
  title: "Titre formation"
}