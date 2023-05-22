CREATE DATABASE IF NOT EXISTS testlodb;

USE testlodb;

CREATE TABLE users (
  login VARCHAR(255) NOT NULL,
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  node_id VARCHAR(255) NOT NULL,
  avatar_url VARCHAR(255) NOT NULL,
  gravatar_id VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL,
  html_url VARCHAR(255) NOT NULL,
  followers_url VARCHAR(255) NOT NULL,
  following_url VARCHAR(255) NOT NULL,
  gists_url VARCHAR(255) NOT NULL,
  starred_url VARCHAR(255) NOT NULL,
  subscriptions_url VARCHAR(255) NOT NULL,
  organizations_url VARCHAR(255) NOT NULL,
  repos_url VARCHAR(255) NOT NULL,
  events_url VARCHAR(255) NOT NULL,
  received_events_url VARCHAR(255) NOT NULL,
  type VARCHAR(255) NOT NULL,
  site_admin BOOLEAN NOT NULL,
  name VARCHAR(255) NOT NULL,
  company VARCHAR(255) DEFAULT NULL,
  blog VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  email VARCHAR(255) DEFAULT NULL,
  hireable VARCHAR(255) DEFAULT NULL,
  bio VARCHAR(255) NOT NULL,
  twitter_username VARCHAR(255) DEFAULT NULL,
  public_repos INT DEFAULT NULL,
  public_gists INT NOT NULL,
  followers INT NOT NULL,
  following INT NOT NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT NULL,
  deleted_at DATETIME DEFAULT NULL,
  UNIQUE KEY (login)
);