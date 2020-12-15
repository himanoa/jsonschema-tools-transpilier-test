const JsonSchemaTranspiler = require("@json-schema-tools/transpiler").default
const referenceResolver = require("@json-schema-tools/reference-resolver").default;
const { defineSchema } = require("@japan-d2/schema")

const user = defineSchema()
  .string('name', {maxLength: 255, minLength: 1})
  .integer("age", { minimum: 0 })
  .enum('kind', ['readonly', 'normal', 'admin'])

const userSchema = {...user.toJSONSchema(), title: 'user'}
const transpiler = new JsonSchemaTranspiler(referenceResolver(userSchema))

console.log(user.toJSONSchema())
console.log(transpiler.toTypescript())
