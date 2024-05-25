// components/ProfilePage.tsx
import React from "react";
import Head from "next/head";
import Layout from "../components/profileLayout";
import styles from "./ProfilePage.module.css";

const ProfilePage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Profile</title>
      </Head>
      <div className={styles.profileContainer}>
        <div className={styles.header}>
          <div className={styles.profileInfo}>
            <div className={styles.profileAvatar}>L</div>
            <div className={styles.profileDetails}>
              <h1 className={styles.profileName}>Lucas Tay</h1>
              <p className={styles.profileLevel}>
                LEVEL 4{" "}
                <span className="ml-2 text-xs">
                  Last Check-In: Today at 03:08PM
                </span>
              </p>
              <div className={styles.profilePointsContainer}>
                <span className={styles.profilePoints}>85 Total Points</span>
                <button className={styles.eventButton}>Redeem points!</button>
              </div>
            </div>
          </div>
          <div className={styles.rankSection}>
            <p className={styles.rankNumber}>
              20<span className={styles.rankFraction}>/365</span>
            </p>
            <p className={styles.rankLabel}>Rank</p>
            <button className={styles.leaderboardButton}>
              VIEW LEADERBOARD
            </button>
          </div>
        </div>
        <div className={styles.progressSection}>
          <div className={styles.progressInfo}>
            <p className={styles.progressText}>45% Completed</p>
            <p className={styles.progressLabel}>Rank Up!</p>
          </div>
          <div className={styles.progressBarContainer}>
            <div className={styles.progressBar} style={{ width: "45%" }}></div>
          </div>
        </div>
        <div className={styles.badgesSection}>
          <h2 className={styles.badgesTitle}>Badges</h2>
          <div className={styles.badgesContainer}>
            <div className={styles.badge}>
              <img
                src="/images/badge1.png"
                alt="Global Volunteer Badge"
                className={styles.badgeImage}
              />
            </div>
            <div className={styles.badge}>
              <img
                src="/images/badge2.png"
                alt="Eco Warrior Badge"
                className={styles.badgeImage}
              />
            </div>
          </div>
        </div>
        <div className={styles.historySection}>
          <h2 className={styles.historyTitle}>Volunteering History</h2>
          <div className={styles.historyHeader}>
            <div className={styles.historyEvent}>Event</div>
            <div className={styles.historyDate}>Date</div>
            <div className={styles.historyPoints}>Points</div>
            <div className={styles.historyButton}></div>
          </div>
          <div className={styles.historyItem}>
            <div className={styles.historyEvent}>
              Beach Clean-Up - Changi Beach July
            </div>
            <div className={styles.historyDate}>12/04/2024</div>
            <div className={styles.historyPoints}>20 Points</div>
            <div className={styles.historyButton}>
              <button className={styles.eventButton}>Go to event</button>
            </div>
          </div>
          <div className={styles.historyItem}>
            <div className={styles.historyEvent}>
              Volunteer @ Club Heal Loyang
            </div>
            <div className={styles.historyDate}>27/05/2024</div>
            <div className={styles.historyPoints}>65 Points</div>
            <div className={styles.historyButton}>
              <button className={styles.eventButton}>Go to event</button>
            </div>
          </div>
        </div>

        {/* Add dummy content for scrolling */}
        <div className={styles.dummyContent}>
          <p>Additional Content to Enable Scrolling</p>
          {[...Array(20)].map((_, index) => (
            <p key={index}>This is dummy content line {index + 1}.</p>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
