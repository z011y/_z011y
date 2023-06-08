// import Link from '../components/Link';
import Button from '../components/Button';
// import Arch from 'src/components/Arch';
import CalloutCard from '../components/CalloutCard';
import { useEffect, useState } from 'react';
// import { StoreContext } from '../contexts/store';

type AppData = {
  numRepos: number | null;
};

function Home() {
  const [data, setData] = useState<AppData>({ numRepos: null });
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  async function fetchNumRepos() {
    const REPOS_URL = 'https://api.github.com/users/z011y/repos';

    setIsFetching(true);

    try {
      const res = await fetch(REPOS_URL, {
        headers: { Authorization: import.meta.env.VITE_GITHUB_API_TOKEN ?? '' },
      });
      const result = await res.json();
      localStorage.setItem('numRepos', result.length);
      setData({ numRepos: result.length });
    } catch (err) {
      console.error(err);
    }

    setIsFetching(false);
  }

  async function getNumRepos() {
    setIsLoading(true);
    const cachedValue = localStorage.getItem('numRepos');

    if (cachedValue) {
      setData({ numRepos: parseInt(cachedValue) });
    } else {
      fetchNumRepos();
    }

    setIsLoading(false);
  }

  useEffect(() => {
    getNumRepos();
  }, []);

  return (
    <section className="stack p-lg center">
      <p>Hi ✌️ my name is</p>
      <h1>Cameron Zollinger</h1>
      <p style={{ textAlign: 'center' }}>
        I'm a Software Engineering Technical Lead at{' '}
        <a
          style={{ color: 'var(--primary-color)' }}
          href="https://award.co"
          target="_blank"
        >
          Awardco
        </a>
        . <br /> Currently creating new ways for companies to measure their
        company culture.
      </p>
      <Button text="my work" href="/projects" />
      <div style={{ marginTop: '3rem' }} className="grid w-full">
        <CalloutCard
          title="Repositories"
          value={data?.numRepos}
          isLoading={isLoading}
          isFetching={isFetching}
        />
        <div className="card">
          <h3>Callout Card</h3>
        </div>
        <div className="card">
          <h3>Callout Card</h3>
        </div>
        <div className="card">
          <h3>Languages & Frameworks</h3>
          <ol>
            <li className="mono font-sm">TypeScript</li>
            <li className="mono font-sm">React</li>
            <li className="mono font-sm">Vue</li>
            <li className="mono font-sm">Cypress</li>
            <li className="mono font-sm">Python</li>
            <li className="mono font-sm">Locust</li>
            <li className="mono font-sm">SQL</li>
            <li className="mono font-sm">Postgres</li>
            <li className="mono font-sm">C#</li>
          </ol>
        </div>
        <div style={{ gridColumn: 'span 2' }} className="card">
          <h3>Some Chart</h3>
        </div>
      </div>
    </section>
  );
}

export default Home;
