/**
 * dojox - A version of dojox.js framework that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/dojox/
 * @license MIT
 */
dojo.provide("dojox.json.tests.schema"),dojo.require("dojox.json.schema"),dojo.require("dojox.json.ref");var simpleObj={name:"John Doe",age:30,$schema:{type:{name:{type:"string",required:!0},age:{type:"number",maximum:125}}}},biggerObj={name:"John Doe",born:"1979-03-23T06:26:07Z",gender:"male",tuple:[1,"a",!1],address:{street:"123 S Main St",city:"Springfield",state:"CA"}},invalidBiggerObj={name:"John Doe",born:!1,gender:"mal",address:{street:"123 S Main St",city:"Springfield",state:"CA"}},biggerSchema={readonly:!0,type:"object",properties:{name:{type:"string",length:5,optional:!1},tuple:{items:[{type:"integer"},{type:"string"},{type:"boolean"}]},born:{type:["number","string"],format:"date",minimum:1900,maximum:2010},gender:{type:"string",enum:["male","female"],options:[{label:"Male",value:"male"},{label:"Female",value:"female"}]},address:{type:"object",properties:{street:{type:"string"},city:{type:"string"},state:{type:"string"}}}}},schemaForSchemas={description:"This is the JSON Schema for JSON Schemas.",type:["object","array"],items:{type:"object",properties:{$ref:"$.properties"},description:"When the schema is an array, it indicates that it is enforcing tuple typing. Each item in the instance array must correspond to the item in the schema array"},properties:{type:{type:["string","array"],items:{$ref:"$.properties.type"},description:"This is a type definition value. This can be a simple type, or a union type",options:[{value:"string"},{value:"object"},{value:"array"},{value:"boolean"},{value:"number"},{value:"integer"},{value:"null"},{value:"any"}],unconstrained:!0,optional:!0,default:"any"},optional:{type:"boolean",description:"This indicates that the instance property in the instance object is not required.",optional:!0,default:!1},properties:{type:"object",additionalProperties:{$ref:"$"},description:"This is a definition for the properties of an object value",optional:!0,default:{}},items:{type:"object",properties:{$ref:"$.properties"},description:"When the value is an array, this indicates the schema to use to validate each item in an array",optional:!0,default:{}},additionalProperties:{type:["boolean","object"],properties:{$ref:"$.properties"},description:"This provides a default property definition for all properties that are not explicitly defined in an object type definition.",optional:!0,default:{}},specificity:{type:"number",description:"This indicates an order of specificity of properties. If an instance defines another property with a higher specificity than this one, than this instance property is required.",optional:!0,default:!1},identity:{type:"boolean",description:"This indicates that the instance property should have unique values. No other property with the same name in the instance object tree should have the same value.",optional:!0,default:!1},minimum:{type:"number",optional:!0,description:"This indicates the minimum value for the instance property when the type of the instance value is a number, or it indicates the minimum number of values in an array when an array is the instance value."},maximum:{type:"number",optional:!0,description:"This indicates the maximum value for the instance property when the type of the instance value is a number, or it indicates the maximum number of values in an array when an array is the instance value."},pattern:{type:"string",format:"regex",description:"When the instance value is a string, this provides a regular expression that a instance string value should match in order to be valid.",optional:!0,default:".*"},maxLength:{type:"number",optional:!0,description:"When the instance value is a string, this indicates maximum length of the string."},minLength:{type:"number",optional:!0,description:"When the instance value is a string, this indicates minimum length of the string."},maxItems:{type:"number",optional:!0,description:"When the instance value is an array, this indicates maximum number of items."},minItems:{type:"number",optional:!0,description:"When the instance value is an array, this indicates minimum number of items."},enum:{type:"array",optional:!0,description:"This provides an enumeration of possible values that are valid for the instance property."},options:{type:"array",items:{properties:{label:{type:"string",description:"This is the label for this option",optional:!0},value:{description:"This is the value for this option"}},description:"This is an option for list of possible values"},optional:!0,description:"This provides a list of suggested options for the instance property."},readonly:{type:"boolean",description:"This indicates that the instance property should not be changed (this is only for interaction, it has no effect for standalone validation).",optional:!0,default:!1},description:{type:"string",optional:!0,description:"This provides a description of the purpose the instance property. The value can be a string or it can be an object with properties corresponding to various different instance languages (with an optional default property indicating the default description)."},format:{type:"string",optional:!0,description:"This indicates what format the data is among some predefined formats which may include:\n\ndate - a string following the ISO format \naddress \nschema - a schema definition object \nperson \npage \nhtml - a string representing HTML"},default:{type:"any",optional:!0,description:"This indicates the default for the instance property."},transient:{type:"boolean",optional:!0,description:"This indicates that the property will be used for transient/volatile values that should not be persisted.",default:!1},maxDecimal:{type:"integer",optional:!0,description:"This indicates the maximum number of decimal places in a floating point number."},hidden:{type:"boolean",optional:!0,description:"This indicates whether the property should be hidden in user interfaces."},extends:{type:"object",properties:{$ref:"$.properties"},description:"This indicates the schema extends the given schema. All instances of this schema must be valid to by the extended schema also.",optional:!0,default:{}},id:{type:["string","number"],optional:!0,format:"url",identity:!0}}};schemaForSchemas=dojox.json.ref.resolveJson(schemaForSchemas),doh.register("dojox.validate.tests.jsonSchema",[{name:"isValidForSchema",runTest:function(e){doh.t(dojox.json.schema.validate(simpleObj).valid),doh.t(dojox.json.schema.validate(biggerObj,biggerSchema).valid),doh.f(dojox.json.schema.validate(invalidBiggerObj,biggerSchema).valid),doh.t(dojox.json.schema.validate(schemaForSchemas,schemaForSchemas).valid),doh.t(dojox.json.schema.validate(biggerSchema,schemaForSchemas).valid)}},{name:"isValidPropertyChange",runTest:function(e){doh.f(dojox.json.schema.checkPropertyChange(biggerObj,biggerSchema).valid),doh.t(dojox.json.schema.checkPropertyChange(schemaForSchemas,schemaForSchemas).valid)}},function(e){var t={disallow:[{maxLength:4}]};doh.t(dojox.json.schema.validate("hello",t).valid),doh.f(dojox.json.schema.validate("hi",t).valid)},function(e){var t={maxDecimal:4};doh.t(dojox.json.schema.validate(4.44,t).valid),doh.f(dojox.json.schema.validate(4.444444,t).valid)},function(e){var t={items:[{type:"string"},{type:"number"}]};doh.t(dojox.json.schema.validate(["hi",33],t).valid),doh.f(dojox.json.schema.validate([22,22],t).valid)},function(e){var t={type:["string","number"]};doh.t(dojox.json.schema.validate(22,t).valid),doh.t(dojox.json.schema.validate("hi",t).valid),doh.f(dojox.json.schema.validate(null,t).valid),doh.f(dojox.json.schema.validate({foo:"bar"},t).valid)},function(e){var t={type:[{type:"object",properties:{name:{type:"string"},id:{type:"integer"}},additionalProperties:!1},{type:"object",properties:{brand:{type:"string"},id:{type:"integer"}},additionalProperties:!1}]};doh.t(dojox.json.schema.validate({name:"Bill",id:3},t).valid),doh.t(dojox.json.schema.validate({brand:"Dojo",id:3},t).valid),doh.f(dojox.json.schema.validate({foo:"bar"},t).valid),doh.f(dojox.json.schema.validate({foo:"bar",brand:"Dojo",id:3},t).valid),doh.f(dojox.json.schema.validate("a string",t).valid)},function(e){doh.f(dojox.json.schema.validate({foo:"bar"},{properties:{foo:"string"}}).valid)}]);
//# sourceMappingURL=../../sourcemaps/json/tests/schema.js.map