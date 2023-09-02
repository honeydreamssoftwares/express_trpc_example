"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = exports.t = void 0;
const server_1 = require("@trpc/server");
const zod_1 = require("zod");
exports.t = server_1.initTRPC.create();
exports.appRouter = exports.t.router({
    getUser777: exports.t.procedure.input(zod_1.z.string()).query((opts) => {
        opts.input; // string
        console.log("OPTS", opts);
        return { id: opts.input, name: 'Bilbo 66' };
    }),
    createUser: exports.t.procedure
        .input(zod_1.z.object({ name: zod_1.z.string().min(5) }))
        .mutation((opts) => __awaiter(void 0, void 0, void 0, function* () {
        // use your ORM of choice
        return "ok";
    })),
});
//# sourceMappingURL=approuter.js.map