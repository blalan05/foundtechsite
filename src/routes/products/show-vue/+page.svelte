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
    ShowVue is in active development and not yet available. The features below are built and in internal testing; items marked in progress are still being finished. Reach out via our contact page if you'd like early access when it launches.
  </p>

  <p>ShowVue is a web-based management app for community and small professional theaters. It pulls the work that usually lives in spreadsheets, email threads, and a half-dozen separate tools into one place: picking your season, casting and scheduling, selling tickets, running concessions, renting out costumes and props, and keeping the books. It is built around how volunteer-run theaters actually operate — board votes on show proposals, one shared member roster, and a treasurer who is not an accountant.</p>

  <h2>Season planning, from proposal to opening night</h2>
  <p>Directors submit show proposals with scripts, budgets, and proposed schedules. The board reviews and votes, and an approved proposal becomes a show with its schedule and staff carried over. A shared catalog of scripts, authors, and publishers keeps titles consistent, and theaters that pick their season board-first can post open directing slots instead.</p>
  <ul>
    <li>Proposal wizard with scripts, budget, and performance schedule</li>
    <li>Board review and voting, with an approve-and-promote step</li>
    <li>Script, author, and publisher catalog</li>
    <li>Supports director-led or board-led season selection, including festival programs of short pieces</li>
  </ul>

  <h2>Cast, crew, and schedules</h2>
  <p>Keep one roster for your whole company. Assign cast and crew per show, track conflict dates, and build rehearsal and performance schedules with call lists so people only get called when they're needed. Audition signups and volunteer shifts run through the same system, and rehearsal reports keep everyone on the same page.</p>
  <ul>
    <li>Cast and crew assignments with roles and contact info</li>
    <li>Availability and conflict tracking</li>
    <li>Rehearsal schedules, call lists, and rehearsal reports</li>
    <li>Online audition signups and volunteer shift scheduling</li>
  </ul>

  <h2>Box office and ticketing</h2>
  <p>Set up ticket types with advance and at-the-door pricing, sell online through your theater's own Square account, and handle box office sales, comps, and consignment tickets in the same place. Flex passes, order confirmation emails, and check-in at the door are included, with sales reports broken out by outlet and payment method. Reserved seating charts are in progress; general admission works today.</p>
  <ul>
    <li>Online, box office, and consignment sales channels</li>
    <li>Advance and door pricing, comps, presale codes, flex passes</li>
    <li>Door check-in and order confirmation emails</li>
    <li>Sales reporting by outlet and payment method</li>
    <li>In progress: assigned seating charts</li>
  </ul>

  <h2>Concessions</h2>
  <p>Track your concession items and stock, record sales by performance, and see per-show summaries and top sellers so you know what to stock for the next run.</p>

  <h2>Costumes, props, and rentals</h2>
  <p>Catalog your costumes, props, and equipment. Track what each show is using, take rental requests from other theaters through your public page, and log checkouts and returns so things come back. In-house build and sourcing lists for costumes, props, and set pieces — plus a paint inventory — live alongside each show.</p>

  <h2>Money management</h2>
  <p>Every show gets a budget with expense and revenue tracking. Behind that sits a full set of books: a double-entry ledger designed for volunteer treasurers, with plain-language entry wizards, bank accounts and a check register, donation tracking, and reports on a cash or accrual basis. Ticket, concession, and rental activity posts to the ledger automatically.</p>

  <h2>Your patrons and your public page</h2>
  <p>Each theater gets a public page with its shows, tickets, auditions, volunteer opportunities, and rentals. Patrons can look up orders, print tickets, and request refunds; members sign in with email or a Google or Facebook account, and families can manage accounts for kids in the cast.</p>

  <h2>In progress</h2>
  <p>A few pieces are built but still being finished and tested: email newsletters and contact lists for patron outreach, assigned seating charts, and a public board-of-directors page. We'll update this page as they land.</p>

  <p>
    Interested in early access when ShowVue launches? <a href="/contact">Reach out</a> and tell us about your
    theater.
  </p>
</div>

<style>
  div {
    max-width: 760px;
    margin: 0 auto;
    padding: 2em 1.5em 4em;
  }

  h1 {
    font-size: 2.2rem;
    font-weight: bold;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: bold;
    margin-top: 1.6em;
  }

  p {
    margin: 0.8em 0;
    line-height: 1.6;
  }

  ul {
    list-style: disc;
    padding-left: 1.4em;
    margin: 0.6em 0;
  }

  li {
    margin: 0.3em 0;
    line-height: 1.5;
  }

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
