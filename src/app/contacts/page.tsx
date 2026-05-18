import { generatePageMetadata } from '@/lib/metadata';
import { ContactFormSection } from '@/components/ContactFormSection';

export const metadata = generatePageMetadata({
  title: 'Контакты',
  description: 'Свяжитесь с нами.',
  canonicalPath: '/contacts',
});

export default function ContactsPage() {
  return (
    <div className="pt-16">
      <div className="container py-16">
        <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-8">Контакты</h1>
      </div>
      <ContactFormSection />
    </div>
  );
}
