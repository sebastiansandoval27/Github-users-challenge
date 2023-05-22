
import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'

interface UserAttributes {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: null;
  blog: string;
  location: string;
  email: null;
  hireable: null;
  bio: string;
  twitter_username: null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}
export interface UserInput extends Optional<UserAttributes, 'id' | 'node_id'> { }
export interface UserOuput extends Required<UserAttributes> { }


class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  public login!: string;
  public id!: number;
  public node_id!: string;
  public avatar_url!: string;
  public gravatar_id!: string;
  public url!: string;
  public html_url!: string;
  public followers_url!: string;
  public following_url!: string;
  public gists_url!: string;
  public starred_url!: string;
  public subscriptions_url!: string;
  public organizations_url!: string;
  public repos_url!: string;
  public events_url!: string;
  public received_events_url!: string;
  public type!: string;
  public site_admin!: boolean;
  public name!: string;
  public company!: null;
  public blog!: string;
  public location!: string;
  public email!: null;
  public hireable!: null;
  public bio!: string;
  public twitter_username!: null;
  public public_repos!: number;
  public public_gists!: number;
  public followers!: number;
  public following!: number;
  public created_at!: string;
  public updated_at!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

User.init({
  login: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  node_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  avatar_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gravatar_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  html_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  followers_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  following_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  gists_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  starred_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  subscriptions_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  organizations_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  repos_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  events_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  received_events_url: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  site_admin: {

    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  company: {
    type: DataTypes.STRING,
    allowNull: true
  },
  blog: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true
  },
  hireable: {
    type: DataTypes.STRING,
    allowNull: true
  },
  bio: {
    type: DataTypes.STRING,
    allowNull: false
  },
  twitter_username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  public_repos: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  public_gists: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  followers: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  following: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  created_at: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize: sequelizeConnection,
  tableName: 'users',
  timestamps: true,
  paranoid: true,
  underscored: true,
  createdAt: 'created_at',
})

export default User