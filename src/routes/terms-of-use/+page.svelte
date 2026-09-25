<script>
  import SEOHead from "$lib/SEOHead.svelte";
  import { LEGAL } from "$lib/legal.js";
</script>

<SEOHead
  title="Terms of Use | FoundTech"
  description="Plain-English terms for using foundtechsolutions.com. FoundTech products are governed by their own agreements, including the ShowVue Early Access Agreement and the FullVue Subscription Agreement."
  path="/terms-of-use"
/>

<div>
  <h1>Website Terms of Use</h1>
  <p class="doc-meta">
    <em>Version {LEGAL.termsOfUse.version} &mdash; Effective {LEGAL.termsOfUse.effective}</em>
  </p>

  <p>
    This website is operated by Foundational Technologies, LLC, a Wisconsin limited liability
    company based in Appleton, Wisconsin (&ldquo;FoundTech,&rdquo; &ldquo;we,&rdquo;
    &ldquo;us&rdquo;). These Terms of Use govern your use of our public websites, including
    foundtechsolutions.com (the &ldquo;Site&rdquo;). By using the Site, you agree to these Terms of
    Use.
  </p>
  <p>
    These terms cover the Site only. Our products are governed by their own agreements: ShowVue by
    the <a href="/products/show-vue/terms-of-service">ShowVue Early Access Agreement</a>, and
    FullVue by the
    <a href="https://fullvue.io/subscription-agreement" rel="external">FullVue Subscription
    Agreement</a>. Custom software engagements are governed by the written agreement for that
    engagement. Product agreements control over these Terms of Use for anything relating to the
    product. Our <a href="/privacy-policy">Privacy Policy</a> describes how we handle personal data.
  </p>

  <h3>1. Use of the Site</h3>
  <p>
    You may view, download, and print content from the Site for evaluating and doing business with
    FoundTech. You agree not to: use the Site for any unlawful purpose; interfere with or disrupt
    the Site or the servers and networks that host it; attempt to gain unauthorized access to any
    system, account, or data connected to the Site; or scrape, harvest, or bulk-collect content or
    contact information from the Site by automated means, except for the normal operation of public
    search engines indexing the Site.
  </p>

  <h3>2. Content and Trademarks</h3>
  <p>
    All content on the Site &mdash; text, graphics, logos, icons, images, and software &mdash; is
    the property of FoundTech or its licensors and is protected by copyright, trademark, and other
    intellectual-property laws. FoundTech, FullVue, ShowVue, and related logos are trademarks of
    Foundational Technologies, LLC. All rights not expressly granted are reserved. Content on the
    Site is provided for general information and may change without notice; it is not a binding
    offer, and product features, availability, and prices are confirmed in the applicable product
    agreement or engagement agreement.
  </p>

  <h3>3. Submissions</h3>
  <p>
    Personal data you submit through Site forms is handled as described in our
    <a href="/privacy-policy">Privacy Policy</a>. If you send us ideas, suggestions, or feedback
    about our products or services through the Site, we may use them without restriction or
    obligation.
  </p>

  <h3>4. Third-Party Links</h3>
  <p>
    The Site may link to third-party websites. They are not under our control, we are not
    responsible for their content or practices, and a link does not imply endorsement.
  </p>

  <h3>5. Disclaimer</h3>
  <p>
    THE SITE AND ITS CONTENT ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE,&rdquo;
    WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED
    WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT
    WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL COMPONENTS.
  </p>

  <h3>6. Limitation of Liability</h3>
  <p>
    TO THE MAXIMUM EXTENT PERMITTED BY LAW, FOUNDTECH&rsquo;S AGGREGATE LIABILITY ARISING OUT OF OR
    RELATING TO THE SITE OR THESE TERMS OF USE WILL NOT EXCEED ONE HUNDRED U.S. DOLLARS (USD 100),
    AND FOUNDTECH WILL NOT BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL
    DAMAGES. Liability relating to a FoundTech product is governed exclusively by that
    product&rsquo;s agreement.
  </p>

  <h3>7. Changes to these Terms</h3>
  <p>
    We may update these Terms of Use from time to time. The version and effective date at the top of
    this page identify the current terms, and we will post material changes prominently on the Site
    before they take effect. Your use of the Site after a new version takes effect constitutes
    acceptance of it. Archived copies of prior versions are available on request.
  </p>

  <h3>8. Governing Law and Venue</h3>
  <p>
    These Terms of Use are governed by the laws of the State of Wisconsin, without regard to its
    conflict-of-law rules. Any dispute arising out of or relating to the Site or these Terms of Use
    will be brought exclusively in the state courts sitting in Outagamie County, Wisconsin, or the
    United States District Court for the Eastern District of Wisconsin, and each party consents to
    the personal jurisdiction and venue of those courts.
  </p>

  <h3>9. Contact</h3>
  <p>
    Questions about these Terms of Use can be sent to
    <a href="mailto:sales@foundtechsolutions.com">sales@foundtechsolutions.com</a> or through our
    <a href="/contact">contact form</a>. Foundational Technologies, LLC is based in Appleton,
    Wisconsin.
  </p>
</div>

<style>
  div {
    margin: 0 auto;
    max-width: 90%;
  }
  p {
    font-size: 18px;
    margin: 0.8em 0;
  }
  h3 {
    font-size: 22px;
    margin: 1em 0;
  }
  .doc-meta {
    margin-top: -0.4em;
  }
  @media (min-width: 1000px) {
    div {
      max-width: 940px;
    }
  }
</style>
