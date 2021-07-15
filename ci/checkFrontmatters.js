const Yup = require('yup')
const glob = require('glob')
const fm = require('front-matter')
const statuses = require('./statuses')
const fs = require('fs/promises')

const commonValidationSchema = Yup.object().shape({
  title: Yup.string().required(),
  status: Yup.string().oneOf(statuses),
  author: Yup.string().required(),
  created: Yup.date().nullable(),
  'discussions-to': Yup.string().nullable(),
})

const sipValidationSchema = commonValidationSchema.concat(
  Yup.object().shape({
    sip: Yup.number().required(),
  }),
)

const sccpValidationSchema = commonValidationSchema.concat(
  Yup.object().shape({
    sccp: Yup.number().required(),
  }),
)

;(() => {
  try {
    // SIP
    glob('./content/sips/*.md', async (err, files) => {
      files.forEach(async (file) => {
        const content = await fs.readFile(file, 'utf-8')
        const { attributes } = fm(content)
        try {
          await sipValidationSchema.validate(attributes)
        } catch (error) {
          console.error({
            file,
            errors: error.errors,
            value: error.value,
          })
        }
      })
    })
    // SCCP
    glob('./content/sccp/*.md', async (err, files) => {
      files.forEach(async (file) => {
        const content = await fs.readFile(file, 'utf-8')
        const { attributes } = fm(content)
        try {
          await sccpValidationSchema.validate(attributes)
        } catch (error) {
          console.error({
            file,
            errors: error.errors,
            value: error.value,
          })
        }
      })
    })
  } catch (error) {
    console.error(error)
  }
})()
