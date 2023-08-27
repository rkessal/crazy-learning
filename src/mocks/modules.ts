import { TFormation, TModule } from "../config/types";
import dummyFile from "/files/dummyFile1.pdf"

export const modules: TModule[] = [
  {
    id: 'mod1',
    title: 'module 1',
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
    supports: [
      {
        id: 'supp3',
        label: 'support 1',
        found: false,
        file: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
      },
      {
        id: 'supp4',
        label: 'support 2',
        found: false,
        file: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
      }
    ]
  }
]


export const formation: TFormation = {
  grade: 0,
  modules: modules,
  title: "Titre formation"
}