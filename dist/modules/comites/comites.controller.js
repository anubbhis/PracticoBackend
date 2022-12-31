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
exports.ComitesController = void 0;
const common_1 = require("@nestjs/common");
const comites_service_1 = require("./comites.service");
const comites_entity_1 = require("../../entities/comites.entity");
let ComitesController = class ComitesController {
    constructor(comitesService) {
        this.comitesService = comitesService;
    }
    findAll() {
        return this.comitesService.getComites();
    }
    async createComite(body) {
        console.log(body);
        const { rut, razon, direccion, comuna, fecha, usuario_id } = body;
        const comite = new comites_entity_1.Comites();
        comite.rut = rut;
        comite.razon = razon;
        comite.direccion = direccion;
        comite.comuna = comuna;
        comite.fecha = fecha;
        comite.estado = true;
        comite.usuario_id = usuario_id;
        console.log(body);
        return this.comitesService.createComite(comite);
    }
    async editComite(id, body) {
        const { rut, razon, direccion, comuna, fecha } = body;
        const comite = new comites_entity_1.Comites();
        comite.rut = rut;
        comite.razon = razon;
        comite.direccion = direccion;
        comite.comuna = comuna;
        comite.fecha = fecha;
        return this.comitesService.updateComiteByID(id, comite);
    }
    async editEstado(id, estado) {
        return this.comitesService.editEstado(id, estado);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComitesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ComitesController.prototype, "createComite", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ComitesController.prototype, "editComite", null);
__decorate([
    (0, common_1.Patch)('/:id/:estado'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('estado')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Boolean]),
    __metadata("design:returntype", Promise)
], ComitesController.prototype, "editEstado", null);
ComitesController = __decorate([
    (0, common_1.Controller)('comites'),
    __metadata("design:paramtypes", [comites_service_1.ComitesService])
], ComitesController);
exports.ComitesController = ComitesController;
//# sourceMappingURL=comites.controller.js.map