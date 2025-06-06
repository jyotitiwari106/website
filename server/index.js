const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API Routes
// Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Please provide name, email, and message.' });
    }

    // In a production environment, you would configure nodemailer with actual SMTP credentials
    // Here we're just simulating a successful response
    console.log('Contact form submission:', { name, email, phone, subject, message });

    // Example of nodemailer setup (commented out for demonstration)
    /*
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact Form Submission: ${subject || 'Contact Inquiry'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });
    */

    res.status(200).json({ success: true, message: 'Your message has been sent successfully!' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ success: false, message: 'Failed to send message. Please try again later.' });
  }
});

// Newsletter subscription
app.post('/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body;

    // Validate input
    if (!email) {
      return res.status(400).json({ success: false, message: 'Please provide an email address.' });
    }

    // In a production environment, you would save this to a database or send to a CRM/email service
    console.log('Newsletter subscription:', { email });

    res.status(200).json({ success: true, message: 'You have successfully subscribed to our newsletter!' });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ success: false, message: 'Failed to subscribe. Please try again later.' });
  }
});

// Services data endpoint
app.get('/api/services', (req, res) => {
  const services = [
    {
      id: 'it-consulting',
      title: 'IT Consulting',
      icon: 'consultant',
      shortDescription: 'Strategic technology planning and implementation guidance.',
      fullDescription: 'Our IT consulting services help businesses optimize their technology strategies, improve operational efficiency, and drive digital transformation.'
    },
    {
      id: 'web-development',
      title: 'Web Development',
      icon: 'web',
      shortDescription: 'Custom websites and web applications that drive results.',
      fullDescription: 'We build custom, high-performance websites and web applications tailored to meet your business needs and deliver exceptional user experiences.'
    },
    {
      id: 'app-development',
      title: 'App Development',
      icon: 'mobile',
      shortDescription: 'Native and cross-platform mobile applications.',
      fullDescription: 'Our app development services deliver native and cross-platform mobile applications that engage users and drive business growth.'
    },
    {
      id: 'cloud-services',
      title: 'Cloud Services',
      icon: 'cloud',
      shortDescription: 'Secure and scalable cloud infrastructure solutions.',
      fullDescription: 'Our cloud services help businesses leverage the power of cloud computing for improved scalability, flexibility, and cost efficiency.'
    },
    {
      id: 'cybersecurity',
      title: 'Cyber Security',
      icon: 'security',
      shortDescription: 'Comprehensive protection against digital threats.',
      fullDescription: 'Our cybersecurity services protect your business from threats and vulnerabilities while ensuring compliance with industry regulations.'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      icon: 'analytics',
      shortDescription: 'Transform data into actionable business insights.',
      fullDescription: 'Our data analytics services help businesses harness their data to gain valuable insights and make informed decisions.'
    }
  ];

  res.json(services);
});

// Blog posts endpoint
app.get('/api/blog', (req, res) => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Ways to Improve Your Cybersecurity Posture',
      author: 'Sarah Johnson',
      date: 'June 15, 2023',
      category: 'Cyber Security',
      image: 'https://via.placeholder.com/800x500',
      excerpt: 'In today\'s digital landscape, cybersecurity threats are evolving faster than ever. Learn how to protect your business with these essential strategies.'
    },
    {
      id: 2,
      title: 'The Benefits of Cloud Migration for Small Businesses',
      author: 'Michael Chen',
      date: 'May 28, 2023',
      category: 'Cloud Services',
      image: 'https://via.placeholder.com/800x500',
      excerpt: 'Moving your operations to the cloud offers numerous advantages for small businesses, from cost savings to improved scalability.'
    },
    {
      id: 3,
      title: 'Web Development Trends to Watch in 2023',
      author: 'Alex Rodriguez',
      date: 'May 12, 2023',
      category: 'Web Development',
      image: 'https://via.placeholder.com/800x500',
      excerpt: 'From AI-powered interfaces to WebAssembly, discover the latest trends that are shaping the future of web development.'
    }
  ];

  res.json(blogPosts);
});

// Case studies endpoint
app.get('/api/case-studies', (req, res) => {
  const caseStudies = [
    {
      id: 1,
      title: 'E-Commerce Platform Transformation',
      client: 'RetailCorp Inc.',
      category: 'Web Development',
      image: 'https://via.placeholder.com/600x400',
      description: 'We helped RetailCorp transform their outdated e-commerce platform into a modern, user-friendly online shopping experience with advanced features.'
    },
    {
      id: 2,
      title: 'Cloud Migration & Infrastructure Optimization',
      client: 'FinanceHub LLC',
      category: 'Cloud Services',
      image: 'https://via.placeholder.com/600x400',
      description: 'Migrated FinanceHub\'s legacy systems to a secure cloud infrastructure, reducing operational costs by 40% while improving reliability.'
    },
    {
      id: 3,
      title: 'Mobile App Development for Healthcare',
      client: 'MediCare Solutions',
      category: 'App Development',
      image: 'https://via.placeholder.com/600x400',
      description: 'Developed a HIPAA-compliant mobile application that streamlined patient management and improved healthcare delivery efficiency.'
    }
  ];

  res.json(caseStudies);
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 