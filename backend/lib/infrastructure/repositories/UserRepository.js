'use strict';

const sequelize = require('../orm/sequelize/sequelize');
const User = require('../../domain/User');
const UserRepository = require('../../domain/UserRepository');

const {users} = require('../orm/sequelize/relationalModel')

module.exports = class extends UserRepository {

    async persist(userEntity) {

        const {userFirstName, userLastName, userID, userEmail, userPassword} = userEntity;
        const seqUser = await users.create({
            userFirstName, userLastName, userID, userEmail, userPassword
        });
        return new User(seqUser.id, seqUser.userFirstName, seqUser.userLastName, seqUser.userID, seqUser.userEmail, seqUser.userPassword)

    }

    async merge(userEntity) {
        const seqUser = await this.model.findByPk(userEntity.id);

        if (!seqUser) return false;

        const {full_name, last_name, email, pass, upgrade_time, last_entry, status, admin, parent_id} = userEntity;
        await seqUser.update({
            full_name,
            last_name,
            email,
            pass,
            last_entry,
            status,
            admin,
            parent_id,
            upgrade_time
        }, {where: {id: userEntity.id}});

        return new User(seqUser.id, seqUser.full_name, seqUser.last_name, seqUser.email, seqUser.pass, seqUser.register_time, seqUser.last_entry, seqUser.status, seqUser.admin, seqUser.parent_id, seqUser.upgrade_time);
    }

    async remove(userId) {
        const seqUser = await this.model.findByPk(userId);
        if (seqUser) {
            return seqUser.destroy();
        }
        return false;
    }

    async get(userId) {
        this.db.import('./../orm/sequelize/models/CvAcademicInfo');
        this.db.import('./../orm/sequelize/models/CvWorkInfo');

        const CvPersonalInfo = this.db.model('cv_personal_info');
        const CvAcademicInfo = this.db.model('cv_academic_info');
        const CVWorkInfo = this.db.model('cv_work_info');

        CvPersonalInfo.belongsTo(this.model, {foreignKey: 'id_user', as: 'usuario'})
        CvPersonalInfo.hasMany(CvAcademicInfo, {foreignKey: 'id_cv_user', as: 'informacionacademica'})
        CvPersonalInfo.hasMany(CVWorkInfo, {foreignKey: 'id_cv_user', as: 'infolaboral'})

        this.model.hasOne(CvPersonalInfo, {foreignKey: 'id_user', as: 'cv'})

        const seqUser = await this.model.findByPk(userId, {
            include: [{
                model: CvPersonalInfo,
                as: 'cv',
                attributes: ['document'],
                include: [{
                    model: CvAcademicInfo,
                    as: 'informacionacademica',
                }, {
                    model: CVWorkInfo,
                    as: 'infolaboral'
                }],
            }]
        });
        const result = await CvPersonalInfo.findAll({
            include: [{
                model: this.model,
                as: 'usuario',
                attributes: ['full_name', 'email']
            },]
        })

        //  result.map(row => console.log(row))

        // console.log(seqUser.cv.informacionacademica)

        if (seqUser)
            return new User(seqUser.id, seqUser.full_name, seqUser.last_name, seqUser.email, seqUser.pass, seqUser.register_time, seqUser.last_entry, seqUser.status, seqUser.admin, seqUser.parent_id, seqUser.upgrade_time, seqUser.cv);
        else
            return false;
    }

    async getByEmail(userEmail) {
        const seqUser = await this.model.findOne({where: {email: userEmail}});
        return new User(seqUser.id, seqUser.full_name, seqUser.last_name, seqUser.email, seqUser.pass, seqUser.register_time, seqUser.last_entry, seqUser.status, seqUser.admin, seqUser.parent_id, seqUser.upgrade_time);
    }

    async findUsers() {
        const seqUsers = await this.model.findAll();
        console.log("seqUsers", seqUsers)
        return seqUsers.map((seqUser) => {
            return new User(seqUser.id, seqUser.full_name, seqUser.last_name, seqUser.email, seqUser.pass, seqUser.register_time, seqUser.last_entry, seqUser.status, seqUser.admin, seqUser.parent_id);
        });
    }

};
