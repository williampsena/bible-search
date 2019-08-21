export const isBlank = value => typeof value === 'undefined' || value === null

export const checkRequired = (attributes: Record<string, any>, fields: string[]) =>
  Object.entries(attributes).every(([name, value]) => {
    if (isBlank(value)) throw new Error(`Argument ${name} is required`)
  })
