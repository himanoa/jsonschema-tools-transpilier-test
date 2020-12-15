const JsonSchemaTranspiler = require("@json-schema-tools/transpiler").default
const JsonSchemaDereferencer = require("@json-schema-tools/dereferencer").default;
const { defineSchema, field } = require("@japan-d2/schema")

const UserKind = field.enum('kind', ['readonly', 'normal', 'admin'])

const user = defineSchema()
  .string('name', {maxLength: 255, minLength: 1})
  .integer("age", { minimum: 0 })
  .enum('kind', UserKind)

async function run() {
  const userSchema = user.toJSONSchema()
  const dereferencer = new JsonSchemaDereferencer(userSchema)
  const dereferencedSchema = await dereferencer.resolve()
  const transpiler = new JsonSchemaTranspiler(dereferencedSchema)
  console.log(transpiler.toTypescript())
}

run()
