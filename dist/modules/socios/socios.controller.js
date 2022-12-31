"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SociosController = void 0;
const common_1 = require("@nestjs/common");
const socios_entity_1 = require("../../entities/socios.entity");
const socios_service_1 = require("./socios.service");
let SociosController = class SociosController {
    constructor(sociosService) {
        this.sociosService = sociosService;
    }
    findAll() {
        return this.sociosService.getSocios();
    }
    async createSocio(body) {
        console.log(body);
        const { comite, rut, nombre, direccion, comuna } = body;
        const socio = new socios_entity_1.Socios();
        socio.comite = comite;
        socio.rut = rut;
        socio.nombre = nombre;
        socio.direccion = direccion;
        socio.comuna = comuna;
        socio.estado = true;
        return this.sociosService.createSocios(socio);
    }
    async editSocio(id, body) {
        const { rut, nombre, direccion, comuna } = body;
        const socio = new socios_entity_1.Socios();
        socio.rut = rut;
        socio.nombre = nombre;
        socio.direccion = direccion;
        socio.comuna = comuna;
        return this.sociosService.updateSociosById(id, socio);
    }
    async editEstado(id, estado) {
        return this.sociosService.editEstado(id, estado);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SociosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SociosController.prototype, "createSocio", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], SociosController.prototype, "editSocio", null);
__decorate([
    (0, common_1.Patch)('/:id/:estado'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('estado')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", Promise)
], SociosController.prototype, "editEstado", null);
SociosController = __decorate([
    (0, common_1.Controller)('socios'),
    __metadata("design:paramtypes", [socios_service_1.SociosService])
], SociosController);
exports.SociosController = SociosController;
//# sourceMappingURL=socios.controller.js.map