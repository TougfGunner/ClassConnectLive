import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginBottom: 30,
  },
  businessName: {
    fontSize: 24,
    fontFamily: 'Helvetica-Bold',
    color: '#8B7355',
    marginBottom: 10,
  },
  greeting: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 1.6,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 15,
    color: '#1A1A1A',
  },
  image: {
    width: '100%',
    height: 250,
    objectFit: 'cover',
    marginBottom: 15,
  },
  smallImage: {
    width: '48%',
    height: 150,
    objectFit: 'cover',
    marginBottom: 10,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  venueInfo: {
    marginBottom: 10,
  },
  venueName: {
    fontSize: 14,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 5,
  },
  venueDescription: {
    fontSize: 12,
    color: '#666666',
    marginBottom: 3,
  },
  colorPalette: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginBottom: 15,
  },
  colorChip: {
    backgroundColor: '#F5F5F5',
    padding: '6px 12px',
    marginRight: 8,
    marginBottom: 8,
    borderRadius: 15,
    fontSize: 10,
  },
  budgetTable: {
    marginTop: 20,
  },
  budgetRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  budgetLabel: {
    fontSize: 12,
    flex: 1,
  },
  budgetAmount: {
    fontSize: 12,
    fontFamily: 'Helvetica-Bold',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    marginTop: 10,
  },
  totalLabel: {
    fontSize: 16,
    fontFamily: 'Helvetica-Bold',
  },
  totalAmount: {
    fontSize: 18,
    fontFamily: 'Helvetica-Bold',
    color: '#8B7355',
  },
  footer: {
    marginTop: 30,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  footerText: {
    fontSize: 11,
    color: '#666666',
    marginBottom: 8,
    lineHeight: 1.5,
  },
});

interface WeddingQuotePDFProps {
  coupleDetails: {
    brideName: string;
    groomName: string;
    weddingDate: string;
  };
  venue: {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
  };
  theme: {
    id: string;
    name: string;
    description: string;
    colors: string[];
    ceremony: string;
    reception: string;
    details: string;
    sweetheart: string;
    budget: number;
  };
  total: number;
}

export default function WeddingQuotePDF({ coupleDetails, venue, theme, total }: WeddingQuotePDFProps) {
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <Document>
      {/* Page 1: Greeting and Overview */}
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.businessName}>The Bliss Weddings</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.greeting}>
            Dear {coupleDetails.brideName} & {coupleDetails.groomName},
          </Text>
          <Text style={styles.greeting}>
            Warmest greetings from The Bliss Weddings.
          </Text>
          <Text style={styles.greeting}>
            Congratulations on your upcoming wedding in Bali!
          </Text>
          <Text style={styles.greeting}>
            We are honored to bring your vision to life. Rest assured that we will plan the wedding of your dreams with elegance and inspiration, matching both your personalities and style.
          </Text>
          <Text style={styles.greeting}>
            Our job is to lavish your special day, paying attention to the smallest details, while smoothing away any concerns. You are important to us, and we want to make sure you feel that way!
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Wedding Quotation</Text>
          <Text style={{ fontSize: 12, marginBottom: 5 }}>
            Created by The Bliss Weddings for {coupleDetails.brideName} & {coupleDetails.groomName}
          </Text>
          {coupleDetails.weddingDate && (
            <Text style={{ fontSize: 12, marginBottom: 5 }}>
              Wedding Date: {formatDate(coupleDetails.weddingDate)}
            </Text>
          )}
          <Text style={{ fontSize: 12, marginTop: 15, color: '#666666' }}>
            ALL RATES IN USD
          </Text>
        </View>
      </Page>

      {/* Page 2: Venue Details */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Selected Venue</Text>
          <View style={styles.venueInfo}>
            <Text style={styles.venueName}>{venue.name}</Text>
            <Text style={styles.venueDescription}>{venue.description}</Text>
          </View>
        </View>
      </Page>

      {/* Page 3: Theme and Color Palette */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Wedding Vision</Text>
          <Text style={styles.venueName}>{theme.name}</Text>
          <Text style={styles.venueDescription}>{theme.description}</Text>

          <View style={{ marginTop: 15, marginBottom: 10 }}>
            <Text style={{ fontSize: 12, fontFamily: 'Helvetica-Bold', marginBottom: 8 }}>
              Color Palette
            </Text>
            <View style={styles.colorPalette}>
              {theme.colors.map((color, index) => (
                <View key={index} style={styles.colorChip}>
                  <Text>{color}</Text>
                </View>
              ))}
            </View>
          </View>

          <Text style={{ fontSize: 12, fontFamily: 'Helvetica-Bold', marginTop: 20, marginBottom: 10 }}>
            Wedding Inspiration
          </Text>
          <View style={styles.imageRow}>
            <View style={{ width: '48%' }}>
              <Text style={{ fontSize: 10, marginBottom: 5, color: '#666666' }}>Ceremony</Text>
            </View>
            <View style={{ width: '48%' }}>
              <Text style={{ fontSize: 10, marginBottom: 5, color: '#666666' }}>Reception</Text>
            </View>
          </View>
          <View style={styles.imageRow}>
            <View style={{ width: '48%' }}>
              <Text style={{ fontSize: 10, marginBottom: 5, color: '#666666' }}>Details</Text>
            </View>
            <View style={{ width: '48%' }}>
              <Text style={{ fontSize: 10, marginBottom: 5, color: '#666666' }}>Sweetheart Table</Text>
            </View>
          </View>
        </View>
      </Page>

      {/* Page 4: Budget Breakdown */}
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Investment Breakdown</Text>

          <View style={styles.budgetTable}>
            <View style={styles.budgetRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.budgetLabel}>{venue.name}</Text>
                <Text style={{ fontSize: 10, color: '#666666', marginTop: 3 }}>{venue.description}</Text>
              </View>
              <Text style={styles.budgetAmount}>${venue.price.toLocaleString()}</Text>
            </View>

            <View style={styles.budgetRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.budgetLabel}>{theme.name}</Text>
                <Text style={{ fontSize: 10, color: '#666666', marginTop: 3 }}>Complete styling package with color palette and design</Text>
              </View>
              <Text style={styles.budgetAmount}>${theme.budget.toLocaleString()}</Text>
            </View>

            <View style={styles.totalRow}>
              <Text style={styles.totalLabel}>Total Estimated Investment</Text>
              <Text style={styles.totalAmount}>${total.toLocaleString()}</Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            This quotation provides an estimated budget for your wedding vision, including venue and styling theme. Detailed planning services, catering, florals, and additional vendors can be discussed during your consultation.
          </Text>
          <Text style={styles.footerText}>
            If you have any questions about this proposal, feel free to get back to us via email or phone. We are looking forward to providing a professional service.
          </Text>
          <Text style={{ ...styles.footerText, marginTop: 15 }}>
            Your highly anticipated celebration is in good hands with The Bliss Weddings!
          </Text>
          <Text style={{ ...styles.footerText, fontFamily: 'Helvetica-Bold', marginTop: 15 }}>
            We're looking forward to serving you in your much anticipated celebration!
          </Text>
        </View>
      </Page>
    </Document>
  );
}
