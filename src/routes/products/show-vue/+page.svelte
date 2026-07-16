<script>
  import SEOHead from "$lib/SEOHead.svelte";
</script>

<SEOHead
  title="ShowVue Theater Management Software — Coming Soon | FoundTech"
  description="ShowVue centralizes production management, box office, concessions, and rentals for small theaters. In active development—coming soon."
  path="/products/show-vue"
/>

<div>
  <h1>ShowVue <span class="coming-soon-badge">Coming soon</span></h1>

  <p class="dev-note">
    ShowVue is in active development. The overview below reflects what's being
    built—reach out via our <a href="/contact">contact page</a> if you'd like
    early access when it launches.
  </p>

  <p>
    ShowVue is a comprehensive theater management application designed specifically for small theaters to streamline their entire production workflow. This powerful web-based platform centralizes all aspects of theater operations, from initial proposal development through final performance execution, providing theater companies with the tools they need to manage complex productions efficiently and professionally.
  </p>
  
  <h2>Core Features</h2>
  
  <h3>Production Management</h3>
  <p>
    Track every aspect of your productions with integrated modules for proposals, scripts, authors, and publishers. Manage your creative pipeline from initial concept through final performance, ensuring all stakeholders have access to the latest information and documentation.
  </p>
  
  <h3>Financial Management</h3>
  <p>
    Keep your productions on budget with comprehensive budget tracking and financial planning tools. Monitor expenses, track revenue, and generate detailed financial reports to ensure your theater's financial health and production viability.
  </p>
  
  <h3>Cast & Crew Management</h3>
  <p>
    Organize your entire production team with detailed cast and crew management features. Track contact information, schedules, availability, and roles for every member of your production team, ensuring smooth coordination and communication.
  </p>
  
  <h3>Schedule Coordination</h3>
  <p>
    Master complex rehearsal and performance schedules with integrated calendar and scheduling tools. Coordinate rehearsals, tech weeks, performances, and special events while managing conflicts and ensuring all team members are properly informed.
  </p>
  
  <h3>Ticket Sales & Box Office</h3>
  <p>
    Manage your box office operations with built-in ticketing and sales tracking. Monitor ticket sales, manage seating arrangements, handle special pricing, and generate sales reports to optimize your revenue streams.
  </p>
  
  <h3>Concessions Management</h3>
  <p>
    Track concession sales and inventory to maximize your theater's revenue potential. Monitor popular items, manage inventory levels, and analyze sales patterns to optimize your concessions offerings.
  </p>
  
  <h2>Rental System</h2>
  <p>
    ShowVue includes a comprehensive rental management system for costumes, props, and equipment. Track rental items, manage availability, process rental agreements, and monitor returns to ensure your valuable theater assets are properly managed and monetized.
  </p>
  
  <h2>Benefits for Small Theaters</h2>
  <p>
    Designed with small theaters in mind, ShowVue provides enterprise-level functionality at an affordable price point. The intuitive interface ensures that even volunteer-run theaters can effectively manage complex productions, while the comprehensive feature set eliminates the need for multiple separate systems and spreadsheets.
  </p>
  
  <p>
    By centralizing all theater operations in one platform, ShowVue helps small theaters operate more professionally, reduce administrative overhead, and focus on what they do best - creating exceptional theatrical experiences for their communities.
  </p>
</div>

<style>
  .coming-soon-badge {
    display: inline-block;
    font-size: 0.5em;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: white;
    background-color: var(--blue);
    border-radius: 999px;
    padding: 0.3em 1em;
    vertical-align: middle;
    margin-left: 0.5em;
  }

  .dev-note {
    border: 1px solid var(--blue);
    border-radius: 8px;
    padding: 1em 1.25em;
    background-color: #eef4fb;
  }
</style>
