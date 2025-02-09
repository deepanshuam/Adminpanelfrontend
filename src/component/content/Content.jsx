// src/components/LandingPage.js
import React from "react";

const Content = () => {
  return (
    <div className="text-white p-8 h-full overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">
        Hey there! 👋 This is a live demo instance of Ankit AdminPanel.
      </h1>
      <h3 className="text-2xl mb-4">Quick links:</h3>
      <ul className="list-disc pl-8 mb-6">
        <li>
          <a
            href="https://directus.io/demo?utm_campaign=Directus%20Pizza&utm_source=pizza"
            className="text-blue-500"
          >
            Book a guided demo with our team 💬
          </a>
        </li>
        <li>
          <a
            href="https://directus.cloud/register?utm_campaign=Directus%20Pizza&utm_source=pizza"
            className="text-blue-500"
          >
            Start building on our cloud ☁️
          </a>
        </li>
        <li>
          <a
            href="https://docs.directus.io/self-hosted/quickstart.html?utm_campaign=Directus%20Pizza&utm_source=pizza"
            className="text-blue-500"
          >
            Self-host on your own 🤝
          </a>
        </li>
      </ul>
      <p className="mb-4">
        Adminpanel is a flexible backend and CMS that provides everyone on your team, regardless of technical skill, equal access to data (content, assets, and more) for any application or project.
      </p>
      <p className="mb-4">
        Right now, you're in our Data Studio. This app provides users with a user-friendly and intuitive interface to create and manage collections, definition of relationships, and set access permissions.
      </p>
      <p className="mb-4">
        Additionally, you can build automations and dashboards for internal applications.
      </p>
      <h2 className="text-2xl font-semibold mb-2">What can I do with Adminpanel?</h2>
      <ul className="list-disc pl-8 mb-4">
        <li>Perform CRUD operations on your data</li>
        <li>Create roles so anyone can access the data</li>
        <li>Assign roles with fully configurable permissions</li>
        <li>Build beautiful dashboards and no-code applications</li>
        <li>Build complex data queries without having to know SQL</li>
        <li>Configure event-driven webhooks and task automation</li>
      </ul>
      <p className="mb-4">
        And so much more. We even wrote a{" "}
        <a
          href="https://directus.io/blog/100-tools-apps-and-platforms-you-can-build-with-directus?utm_campaign=Directus%20Pizza&utm_source=pizza"
          className="text-blue-500"
        >
          comprehensive list of 100+ things you can build
        </a>.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Why Ankit AdminPanel?</h2>
      <p className="mb-4">
        Truth be told, we've been sitting on this URL for a <em>long</em> time. Since we weren't opening up a pizza shop anytime soon, we weren't quite sure what to do with it. So, we cooked up a live demo instance with LOTS of toppings (CMS, LMS, PIM, and more) and figured we'd serve it up here.
      </p>
      <p className="mb-4">
        Plus 🧑‍🍳 🍕
      </p>
      <p className="mb-4">
        We hope you enjoy, and we hope that AdminPanel turns out to be exactly what you're looking for.
      </p>
    </div>
  );
};

export default Content;
