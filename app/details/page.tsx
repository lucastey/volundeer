"use client";

import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import styles from './DetailPage.module.css';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import Layout from '../components/layout';

const DetailPage = () => {
  // Example event details
  const eventDetails = {
    images: ['/images/event1.jpg', '/images/event2.jpg', '/images/event3.jpg'], // Updated paths
    name: 'Beach Cleanup Drive',
    date: 'June 10, 2024',
    time: '08:00 AM to 12:00 PM',
    about: 'Join us for a day out on the beach as we work together to clean our beautiful coastline. Your efforts help to protect marine life and ensure clean beaches for everyone. All materials will be provided.',
    organizer: 'Green Earth Initiative',
    organizerUrl: 'https://example.com',
    organizationDetails: 'Green Earth Initiative is a non-profit organization dedicated to environmental conservation and education. Our mission is to engage and educate the public about environmental issues and encourage sustainable practices.',
    location: 'East Coast Park, Area C',
    requirements: 'Volunteers should be at least 18 years old. Please bring your own water bottle and wear comfortable clothing.',
    lastDateToSignUp: 'June 5, 2024',
    volunteerSlots: '20 slots available',
    spotsLeft: 10, // Example number of spots left
    commitment: 'One-time event',
    activityDetails: 'Beach Cleanup Drive aims to remove trash and debris from our beaches. Volunteers will work in teams to collect, sort, and dispose of waste. Training and materials will be provided on the day of the event.',
    contactPerson: 'John Doe',
    contactEmail: 'johndoe@example.com',
    contactPhone: '+65 1234 5678'
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <h1 className={styles.title}>{eventDetails.name}</h1>
          <div className={styles.organization}>
            by <a href={eventDetails.organizerUrl}>{eventDetails.organizer}</a>
          </div>
          <div className={styles.carousel}>
            <Carousel showThumbs={false}>
              {eventDetails.images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className={styles.section}>
            <div className={styles.field}>
              <span className={styles.fieldLabel}>About the Event:</span>
              <span>{eventDetails.about}</span>
            </div>
            <div className={styles.field}>
              <span className={styles.fieldLabel}>Activity Details:</span>
              <span>{eventDetails.activityDetails}</span>
            </div>
            <div className={styles.field}>
              <span className={styles.fieldLabel}>Requirements:</span>
              <span>{eventDetails.requirements}</span>
            </div>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.section}>
            <div className={styles.field}>
              <span className={styles.fieldLabel}>Contact Person:</span>
              <span>{eventDetails.contactPerson}</span>
            </div>
            <div className={styles.field}>
              <span className={styles.fieldLabel}>Contact Phone:</span>
              <span>{eventDetails.contactPhone}</span>
            </div>
            <div className={styles.field}>
              <span className={styles.fieldLabel}>Contact Email:</span>
              <span>{eventDetails.contactEmail}</span>
            </div>
          </div>
          <div className={styles.separator}></div>
          <div className={styles.section}>
            <div className={styles.field}>
              <span className={styles.fieldLabel}>About the Organization:</span>
              <span>{eventDetails.organizationDetails}</span>
            </div>
          </div>
        </div>
        <div className={styles.rightColumn}>
          <h1 className={styles.titleRight}>{eventDetails.name}</h1>
          <div className={styles.sectionRight}>
            <div className={styles.fieldRight}>
              <div className={styles.fieldLabelRight}>
                <FaMapMarkerAlt className={styles.icon} />
                <span>Location:</span>
              </div>
              <div>{eventDetails.location}</div>
            </div>
            <div className={styles.fieldRight}>
              <div className={styles.fieldLabelRight}>
                <FaCalendarAlt className={styles.icon} />
                <span>Date and Time:</span>
              </div>
              <div>{eventDetails.date}</div>
              <div>{eventDetails.time}</div>
            </div>
            <div className={styles.counter}>
              {eventDetails.spotsLeft} spots left
            </div>
          </div>
          <button className={styles.button} onClick={() => alert('Thank you for applying!')}>
            I want to volunteer
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default DetailPage;
