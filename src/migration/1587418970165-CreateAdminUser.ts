import {MigrationInterface, QueryRunner, getRepository} from "typeorm";
import { User } from "../entity/User";

export class CreateAdminUser1587418970165 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        let user = new User();
        user.username = "admin";
        user.password = "1234";
        user.hashPassword();
        user.role="ADMIN";
        const userRepository = getRepository(User);
        await userRepository.save(user);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
