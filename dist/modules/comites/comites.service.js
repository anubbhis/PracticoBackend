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
exports.ComitesService = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("@nestjs/common/exceptions");
const typeorm_1 = require("@nestjs/typeorm");
const comites_entity_1 = require("../../entities/comites.entity");
const typeorm_2 = require("typeorm");
let ComitesService = class ComitesService {
    constructor(comitesRepository) {
        this.comitesRepository = comitesRepository;
    }
    async getComites() {
        return await this.comitesRepository.find();
    }
    async createComite(comite) {
        return await this.comitesRepository.save(comite);
    }
    async updateComiteByID(id, comites) {
        console.log(id);
        const comite = await this.comitesRepository.findOne({ where: { id: id } });
        if (!comite) {
            throw new exceptions_1.NotFoundException();
        }
        return await this.comitesRepository.save(comite);
    }
    async editEstado(id, estado) {
        const comite = await this.comitesRepository.findOne({ where: { id: id } });
        if (!comite) {
            throw new exceptions_1.NotFoundException();
        }
        comite.estado = estado;
        return await this.comitesRepository.save(comite);
    }
};
ComitesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comites_entity_1.Comites)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ComitesService);
exports.ComitesService = ComitesService;
//# sourceMappingURL=comites.service.js.map