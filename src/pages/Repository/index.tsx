import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useParams, Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues } from './styles';

const Repository: React.FC = () => {
  const { repository } = useParams();
  return (
    <>
      <Header>
        <img src={logo} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/1422971?s=460&u=69206c9e8b7938cf9671402d2687c464a611449f&v=4"
            alt="André Almeida"
          />
          <div>
            <strong>André Almeida</strong>
            <p>Meu repositório</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <a
          href="https://github.com/andyalmeida/github-explorer"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div>
            <strong>Issue #001</strong>
            <p>André Almeida</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a
          href="https://github.com/andyalmeida/github-explorer"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div>
            <strong>Issue #001</strong>
            <p>André Almeida</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a
          href="https://github.com/andyalmeida/github-explorer"
          rel="noopener noreferrer"
          target="_blank"
        >
          <div>
            <strong>Issue #001</strong>
            <p>André Almeida</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Issues>
    </>
  );
};
export default Repository;
