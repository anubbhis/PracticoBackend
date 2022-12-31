"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SociosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const socios_service_1 = require("./socios.service");
const socios_controller_1 = require("./socios.controller");
const socios_entity_1 = require("../../entities/socios.entity");
let SociosModule = class SociosModule {
};
SociosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([socios_entity_1.Socios])],
        providers: [socios_service_1.SociosService],
        controllers: [socios_controller_1.SociosController],
    })
], SociosModule);
exports.SociosModule = SociosModule;
//# sourceMappingURL=socios.module.js.map