import Layout from "../../shared/components/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <section className="header py-3">
        <h1 className="text-2xl font-bold">Agilize - About</h1>
      </section>
      <section className="py-3">
        <p className="p-0">
          Agilize is about applying Agile concepts to help you organize your
          routine.
        </p>
        <p className="p-0">
          In its first version you can create, update, delete and keep track of
          all your current goals
        </p>
      </section>
      <section className="py-3">
        <p className="p-0">
          In next steps it will have sprints and sprints configuration (
          periodicity, review, capacity, and many other concepts of agile )
        </p>
        <p className="p-0">
          If you are struggling to understand the concepts behind Agilize,
          please check more infos about Agile
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.agilealliance.org/agile101/"
          >
            here
          </a>
          .
        </p>
      </section>
    </Layout>
  );
};

export default AboutPage;
