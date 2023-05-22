import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity({
    name: "users"
})
export class User {
  @PrimaryGeneratedColumn()
  
  id!: number;

  @Column({ nullable: true })
  login!: string;

  @Column({ nullable: true })
  node_id!: string;

  @Column({ nullable: true })
  avatar_url!: string;

  @Column({ nullable: true })
  gravatar_id!: string;

  @Column({ nullable: true })
  url!: string;

  @Column({ nullable: true })
  html_url!: string;

  @Column({ nullable: true })
  followers_url!: string;

  @Column({ nullable: true })
  following_url!: string;

  @Column({ nullable: true })
  gists_url!: string;

  @Column({ nullable: true })
  starred_url!: string;

  @Column({ nullable: true })
  subscriptions_url!: string;

  @Column({ nullable: true })
  organizations_url!: string;

  @Column({ nullable: true })
  repos_url!: string;

  @Column({ nullable: true })
  events_url!: string;

  @Column({ nullable: true })
  received_events_url!: string;

  @Column({ nullable: true })
  type!: string;

  @Column({ nullable: true })
  site_admin!: boolean;

  @Column({ nullable: true })
  name!: string;

  @Column({ nullable: true })
  company?: string;

  @Column({ nullable: true })
  blog!: string;

  @Column({ nullable: true })
  location!: string;

  @Column({ nullable: true })
  email?: string;

  @Column({ nullable: true })
  hireable?: boolean;

  @Column({ nullable: true })
  bio!: string;

  @Column({ nullable: true, type: "varchar", length: 20 })
  twitter_username?: string;

  @Column({ nullable: true })
  public_repos!: number;

  @Column({ nullable: true })
  public_gists!: number;

  @Column({ nullable: true })
  followers!: number;

  @Column({ nullable: true })
  following!: number;

  @Column({ nullable: true })
  created_at!: string;

  @Column({ nullable: true })
  updated_at?: string;
}