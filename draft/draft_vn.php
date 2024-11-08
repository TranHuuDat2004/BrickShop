<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
		<script src="https://unpkg.com/unlazy@0.11.3/dist/unlazy.with-hashing.iife.js" defer init></script>
		<script type="text/javascript">
			window.tailwind.config = {
				darkMode: ['class'],
				theme: {
					extend: {
						colors: {
							border: 'hsl(var(--border))',
							input: 'hsl(var(--input))',
							ring: 'hsl(var(--ring))',
							background: 'hsl(var(--background))',
							foreground: 'hsl(var(--foreground))',
							primary: {
								DEFAULT: 'hsl(var(--primary))',
								foreground: 'hsl(var(--primary-foreground))'
							},
							secondary: {
								DEFAULT: 'hsl(var(--secondary))',
								foreground: 'hsl(var(--secondary-foreground))'
							},
							destructive: {
								DEFAULT: 'hsl(var(--destructive))',
								foreground: 'hsl(var(--destructive-foreground))'
							},
							muted: {
								DEFAULT: 'hsl(var(--muted))',
								foreground: 'hsl(var(--muted-foreground))'
							},
							accent: {
								DEFAULT: 'hsl(var(--accent))',
								foreground: 'hsl(var(--accent-foreground))'
							},
							popover: {
								DEFAULT: 'hsl(var(--popover))',
								foreground: 'hsl(var(--popover-foreground))'
							},
							card: {
								DEFAULT: 'hsl(var(--card))',
								foreground: 'hsl(var(--card-foreground))'
							},
						},
					}
				}
			}
		</script>
		<style type="text/tailwindcss">
			@layer base {
				:root {
					--background: 0 0% 100%;
--foreground: 240 10% 3.9%;
--card: 0 0% 100%;
--card-foreground: 240 10% 3.9%;
--popover: 0 0% 100%;
--popover-foreground: 240 10% 3.9%;
--primary: 240 5.9% 10%;
--primary-foreground: 0 0% 98%;
--secondary: 240 4.8% 95.9%;
--secondary-foreground: 240 5.9% 10%;
--muted: 240 4.8% 95.9%;
--muted-foreground: 240 3.8% 46.1%;
--accent: 240 4.8% 95.9%;
--accent-foreground: 240 5.9% 10%;
--destructive: 0 84.2% 60.2%;
--destructive-foreground: 0 0% 98%;
--border: 240 5.9% 90%;
--input: 240 5.9% 90%;
--ring: 240 5.9% 10%;
--radius: 0.5rem;
				}
				.dark {
					--background: 240 10% 3.9%;
--foreground: 0 0% 98%;
--card: 240 10% 3.9%;
--card-foreground: 0 0% 98%;
--popover: 240 10% 3.9%;
--popover-foreground: 0 0% 98%;
--primary: 0 0% 98%;
--primary-foreground: 240 5.9% 10%;
--secondary: 240 3.7% 15.9%;
--secondary-foreground: 0 0% 98%;
--muted: 240 3.7% 15.9%;
--muted-foreground: 240 5% 64.9%;
--accent: 240 3.7% 15.9%;
--accent-foreground: 0 0% 98%;
--destructive: 0 62.8% 30.6%;
--destructive-foreground: 0 0% 98%;
--border: 240 3.7% 15.9%;
--input: 240 3.7% 15.9%;
--ring: 240 4.9% 83.9%;
				}
			}
		</style>
  </head>
  <body>
    

<div class="bg-background text-foreground p-4">
  <header class="flex justify-between items-center mb-4">
    <div class="flex items-center space-x-2">
      <img src="https://placehold.co/40x40?text=Logo" alt="Qman logo" class="h-10" />
      <img src="https://placehold.co/40x40?text=Logo" alt="Keeppley logo" class="h-10" />
    </div>
    <nav class="flex space-x-8 text-lg">
      <a href="#" class="hover:text-primary">Our Story</a>
      <a href="#" class="hover:text-primary">Our Products</a>
      <a href="#" class="hover:text-primary">Contact Us</a>
    </nav>
    <div class="flex space-x-4">
      <a href="#" class="hover:text-primary">EN</a>
      <a href="#" class="hover:text-primary">VN</a>
    </div>
  </header>
  <main class="rounded-lg overflow-hidden">
    <img src="https://placehold.co/800x400" alt="Product showcase with Doraemon theme" class="w-full h-auto" />
  </main>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
    <div class="bg-card text-card-foreground p-4 rounded-lg shadow-md">
      <img src="https://placehold.co/300x200" alt="Product 1" class="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 class="text-lg font-semibold mb-2">Product 1</h3>
      <p class="text-sm text-muted-foreground">Description of Product 1</p>
      <button class="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/80">Buy Now</button>
    </div>
    <div class="bg-card text-card-foreground p-4 rounded-lg shadow-md">
      <img src="https://placehold.co/300x200" alt="Product 2" class="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 class="text-lg font-semibold mb-2">Product 2</h3>
      <p class="text-sm text-muted-foreground">Description of Product 2</p>
      <button class="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/80">Buy Now</button>
    </div>
    <div class="bg-card text-card-foreground p-4 rounded-lg shadow-md">
      <img src="https://placehold.co/300x200" alt="Product 3" class="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 class="text-lg font-semibold mb-2">Product 3</h3>
      <p class="text-sm text-muted-foreground">Description of Product 3</p>
      <button class="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/80">Buy Now</button>
    </div>
  </div>
</div>


  </body>
</html>