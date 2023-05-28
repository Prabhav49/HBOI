import React, { useContext } from 'react'
import accountContext from '../context/accounts/accountContext'
import './css/Aboutus.css';
import { BASE_URL } from '../helper';
const About = () => {
  const a = useContext(accountContext)
  return (
    <div>
      <div className='article'>
        <h2>About Hamilton Bank of India</h2>
        <p>Hamilton Bank of India is a leading financial institution dedicated to serving the banking needs of individuals, businesses, and communities across the country. With a rich history spanning over several decades, we have become a trusted name in the Indian banking sector, offering a comprehensive range of financial services and solutions.</p>

        {/* <h3>Our Vision</h3>
        <p>At Hamilton Bank of India, our vision is to be the preferred banking partner for our customers, providing them with innovative financial solutions, exceptional customer service, and a banking experience that exceeds their expectations. We strive to build long-term relationships with our customers based on trust, transparency, and mutual growth.</p>

        <h3>Our Mission</h3>
        <p>Our mission is to empower individuals and businesses by offering a wide range of banking products and services that cater to their unique needs. We are committed to delivering value to our customers through personalized solutions, competitive rates, and advanced digital banking platforms. We aim to be a catalyst for economic growth and development in the communities we serve.</p> */}

        <h3>Core Values</h3>
        <p><ul><li>Integrity: We adhere to the highest ethical standards, maintaining transparency and honesty in all our interactions.</li>
          <li>Customer Focus: Our customers are at the heart of everything we do. We prioritize their needs and strive to provide exceptional service and customized solutions.</li>
          <li>Innovation: We embrace innovation and leverage technology to deliver cutting-edge banking solutions that enhance convenience and efficiency for our customers.</li>
          <li>Teamwork: We foster a collaborative work environment that encourages teamwork, respect, and diversity. We believe in harnessing the collective knowledge and expertise of our employees to achieve excellence.</li>
          <li>Community Engagement: We actively engage with the communities we serve, supporting initiatives that promote education, social welfare, and environmental sustainability.</li></ul></p>

        <h3>Our Services</h3>
        <p>Hamilton Bank of India offers a comprehensive range of banking services, including:</p><br/>

          <ul><li>Personal Banking: From savings accounts to loans, we provide a wide array of personal banking products and services to help you achieve your financial goals.</li>
          <li>Business Banking: Our business banking solutions cater to the unique needs of small, medium, and large enterprises, offering specialized services such as corporate accounts, trade finance, and cash management.</li>          <li>Investments and Wealth Management: We offer investment products, mutual funds, and personalized wealth management services to help you grow and protect your wealth.</li>
          <li>Digital Banking: Our advanced digital banking platforms provide you with secure and convenient access to your accounts, allowing you to manage your finances anytime, anywhere.</li></ul>

          <h3>Contact Us</h3>
          <p>To learn more about our banking services or to get in touch with us, please visit our official website or reach out to our customer service representatives. We look forward to serving you and being your trusted financial partner.</p>
      </div>
      <div className='advertise'>
        <img src="./assets/Frame1.png" width="100%"/>
      </div>
    </div>
  )
}

export default About
