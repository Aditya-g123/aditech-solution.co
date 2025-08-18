-- Create project_inquiries table for storing form submissions
CREATE TABLE IF NOT EXISTS project_inquiries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    company VARCHAR(255),
    services TEXT[] NOT NULL,
    budget VARCHAR(100) NOT NULL,
    timeline VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    has_existing_website BOOLEAN DEFAULT FALSE,
    needs_ongoing_support BOOLEAN DEFAULT FALSE,
    hear_about_us VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster queries
CREATE INDEX IF NOT EXISTS idx_project_inquiries_email ON project_inquiries(email);

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_project_inquiries_created_at ON project_inquiries(created_at);

-- Create a trigger to automatically update the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_project_inquiries_updated_at 
    BEFORE UPDATE ON project_inquiries 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample data for testing (optional)
INSERT INTO project_inquiries (
    name, 
    email, 
    phone, 
    company, 
    services, 
    budget, 
    timeline, 
    description,
    has_existing_website,
    needs_ongoing_support,
    hear_about_us
) VALUES 
(
    'John Doe',
    'john@example.com',
    '+91 9876543210',
    'Tech Startup Inc.',
    ARRAY['Web Development', 'Mobile App Development'],
    '₹1,00,000 - ₹5,00,000',
    '1-3 months',
    'We need a modern web application with mobile app for our startup. The platform should have user authentication, dashboard, and payment integration.',
    false,
    true,
    'google'
),
(
    'Jane Smith',
    'jane@company.com',
    '+91 8765432109',
    'Digital Solutions Ltd.',
    ARRAY['AI Chatbot Solutions', 'Data Analysis & AI'],
    '₹50,000 - ₹1,00,000',
    'Within 1 month',
    'Looking for an AI-powered chatbot for customer support and data analytics dashboard for business insights.',
    true,
    false,
    'referral'
);
