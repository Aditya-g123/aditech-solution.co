-- Connect to Supabase and query project inquiries data
-- This script demonstrates how to retrieve and analyze form submission data

-- 1. First, let's check if our table exists and view its structure
SELECT 
    table_name,
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns 
WHERE table_name = 'project_inquiries'
ORDER BY ordinal_position;

-- 2. Get total count of project inquiries
SELECT COUNT(*) as total_inquiries 
FROM project_inquiries;

-- 3. Get recent inquiries (last 30 days)
SELECT 
    id,
    name,
    email,
    company,
    services,
    budget,
    timeline,
    created_at
FROM project_inquiries 
WHERE created_at >= NOW() - INTERVAL '30 days'
ORDER BY created_at DESC;

-- 4. Analyze inquiries by budget range
SELECT 
    budget,
    COUNT(*) as inquiry_count,
    ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM project_inquiries), 2) as percentage
FROM project_inquiries 
GROUP BY budget 
ORDER BY inquiry_count DESC;

-- 5. Analyze inquiries by timeline preference
SELECT 
    timeline,
    COUNT(*) as inquiry_count,
    ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM project_inquiries), 2) as percentage
FROM project_inquiries 
GROUP BY timeline 
ORDER BY inquiry_count DESC;

-- 6. Most requested services (unnest the services array)
SELECT 
    service,
    COUNT(*) as request_count
FROM project_inquiries,
UNNEST(services) as service
GROUP BY service
ORDER BY request_count DESC;

-- 7. Inquiries by month (for trend analysis)
SELECT 
    DATE_TRUNC('month', created_at) as month,
    COUNT(*) as inquiry_count
FROM project_inquiries 
GROUP BY DATE_TRUNC('month', created_at)
ORDER BY month DESC;

-- 8. Companies vs individuals analysis
SELECT 
    CASE 
        WHEN company IS NOT NULL AND company != '' THEN 'Company'
        ELSE 'Individual'
    END as client_type,
    COUNT(*) as count,
    ROUND(AVG(CASE 
        WHEN budget = 'Under ₹50,000' THEN 25000
        WHEN budget = '₹50,000 - ₹1,00,000' THEN 75000
        WHEN budget = '₹1,00,000 - ₹5,00,000' THEN 300000
        WHEN budget = '₹5,00,000 - ₹10,00,000' THEN 750000
        WHEN budget = 'Above ₹10,00,000' THEN 1500000
        ELSE 0
    END), 0) as avg_budget_estimate
FROM project_inquiries
GROUP BY client_type;

-- 9. How clients heard about us
SELECT 
    hear_about_us,
    COUNT(*) as count,
    ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM project_inquiries WHERE hear_about_us IS NOT NULL), 2) as percentage
FROM project_inquiries 
WHERE hear_about_us IS NOT NULL
GROUP BY hear_about_us
ORDER BY count DESC;

-- 10. Clients interested in ongoing support
SELECT 
    needs_ongoing_support,
    COUNT(*) as count,
    ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM project_inquiries), 2) as percentage
FROM project_inquiries
GROUP BY needs_ongoing_support;

-- 11. Clients with existing websites
SELECT 
    has_existing_website,
    COUNT(*) as count,
    ROUND(COUNT(*) * 100.0 / (SELECT COUNT(*) FROM project_inquiries), 2) as percentage
FROM project_inquiries
GROUP BY has_existing_website;

-- 12. Full inquiry details for manual review (limit to recent ones)
SELECT 
    id,
    name,
    email,
    phone,
    company,
    services,
    budget,
    timeline,
    LEFT(description, 100) || '...' as description_preview,
    has_existing_website,
    needs_ongoing_support,
    hear_about_us,
    created_at
FROM project_inquiries 
ORDER BY created_at DESC 
LIMIT 20;

-- 13. Create a view for easy dashboard queries
CREATE OR REPLACE VIEW inquiry_dashboard AS
SELECT 
    id,
    name,
    email,
    company,
    CASE 
        WHEN company IS NOT NULL AND company != '' THEN 'Company'
        ELSE 'Individual'
    END as client_type,
    services,
    budget,
    CASE 
        WHEN budget = 'Under ₹50,000' THEN 25000
        WHEN budget = '₹50,000 - ₹1,00,000' THEN 75000
        WHEN budget = '₹1,00,000 - ₹5,00,000' THEN 300000
        WHEN budget = '₹5,00,000 - ₹10,00,000' THEN 750000
        WHEN budget = 'Above ₹10,00,000' THEN 1500000
        ELSE 0
    END as budget_estimate,
    timeline,
    has_existing_website,
    needs_ongoing_support,
    hear_about_us,
    created_at,
    DATE_TRUNC('month', created_at) as inquiry_month
FROM project_inquiries;

-- 14. Query the dashboard view
SELECT * FROM inquiry_dashboard 
ORDER BY created_at DESC 
LIMIT 10;

-- 15. Monthly revenue potential analysis
SELECT 
    inquiry_month,
    COUNT(*) as inquiries,
    SUM(budget_estimate) as potential_revenue,
    AVG(budget_estimate) as avg_project_value
FROM inquiry_dashboard
GROUP BY inquiry_month
ORDER BY inquiry_month DESC;
