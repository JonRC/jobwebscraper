import { ElementHandle } from 'puppeteer'

export const getSelectOptionValues = async (
  select: ElementHandle<HTMLSelectElement>
) => {
  const options = await select.$$<HTMLOptionElement>('option')

  const valuesProcessing = options.map(option =>
    option.evaluate(option => option.value)
  )

  const values = await Promise.all(valuesProcessing)

  return values
}
