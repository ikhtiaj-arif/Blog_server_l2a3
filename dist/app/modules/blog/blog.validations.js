"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogValidations = void 0;
const zod_1 = require("zod");
const createBlogSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().nonempty("Title Name is required!"),
        content: zod_1.z.string().nonempty("Content is required!"),
        author: zod_1.z.string().optional(),
        isPublished: zod_1.z.boolean().optional(),
    }),
});
exports.BlogValidations = {
    createBlogSchema,
};
