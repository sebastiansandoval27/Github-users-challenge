import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity({
    name: "users"
})
export class User {
  @PrimaryGeneratedColumn()
  
  id!: number;

  @Column()
  login!: string;

  @Column()
  node_id!: string;

  @Column()
  avatar_url!: string;

  @Column()
  gravatar_id!: string;

  @Column()
  url!: string;

  @Column()
  html_url!: string;

  @Column()
  followers_url!: string;

  @Column()
  following_url!: string;

  @Column()
  gists_url!: string;

  @Column()
  starred_url!: string;

  @Column()
  subscriptions_url!: string;

  @Column()
  organizations_url!: string;

  @Column()
  repos_url!: string;

  @Column()
  events_url!: string;

  @Column()
  received_events_url!: string;

  @Column()
  type!: string;

  @Column()
  site_admin!: boolean;

  @Column()
  name!: string;

  @Column({ nullable: true })
  company?: string;

  @Column()
  blog!: string;

  @Column()
  location!: string;

  @Column({ nullable: true })
  email?: string;

  @Column({ nullable: true })
  hireable?: boolean;

  @Column()
  bio!: string;

  @Column({ nullable: true, type: "varchar", length: 20 })
  twitter_username?: string;

  @Column()
  public_repos!: number;

  @Column()
  public_gists!: number;

  @Column()
  followers!: number;

  @Column()
  following!: number;

  @Column()
  created_at!: string;

  @Column({ nullable: true })
  updated_at?: string;
}