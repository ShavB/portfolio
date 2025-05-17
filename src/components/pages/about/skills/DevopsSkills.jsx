const DevopsSkills = () => {
  return (
    <main className="flex flex-col mt-18 mx-1 text-clip ">
      <div className="text-left border-b-1 mx-4 pb-2">
        <h1 className="text-3xl">Devops</h1>
      </div>
      <div className="mx-4 m-4 flex flex-col gap-2">
        <p>
          I love designing infrastructure that’s scalable, observable, secure,
          and maintainable—while enabling fast, automated, and reliable
          deployments across environments. What excites me most is bridging the
          gap between development and operations.
        </p>
        <p>
          I enjoy building robust CI/CD pipelines, managing containerized
          workloads, and automating infrastructure so teams can ship faster and
          more confidently.
        </p>
      </div>
      <div className="mx-4">
        <h1>I truly enjoy working on:</h1>
        <div>
          <li>Containerization and orchestration using Docker</li>
          <li>Cloud-native infrastructure on AWS (EC2, S3)</li>
          <li>
            Monitoring and alerting using Prometheus, Grafana, and CloudWatch
          </li>
          <li>CI/CD automation using GitHub Actions and Jenkins</li>
        </div>
      </div>
    </main>
  );
};

export default DevopsSkills;
