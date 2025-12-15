
export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Khushpreet Kaur. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
