import {Model, DataTypes} from "sequelize";
import {sequelize} from "../connection";

export default class User extends Model {
    public id!: number;
    public username!: string;
    public password!: string;
    public email!: string;
    public avatar!: string;
    public locked!: boolean;
    public verified!: boolean;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        avatar: {
            type: DataTypes.STRING(255),
            allowNull: false,
            defaultValue: "default-1.png",
        },
        locked: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        verified: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    },
    {
        tableName: "users",
        sequelize: sequelize,
    }
);
