export const isBlank = value => typeof value === 'undefined' || value === null

export const checkRequired = (attributes: Record<string, any>, fields: string[]) =>
  attributes &&
  fields.every(name => {
    if (isBlank(attributes[name])) throw new Error(`${name} is required`)
  })
