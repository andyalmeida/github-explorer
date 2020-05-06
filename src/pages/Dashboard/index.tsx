import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logo} alt="Github Explorer" />
    <Title>Explore repositórios no Github.</Title>

    <Form>
      <input placeholder="Digite o repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="repository">
        <img
          src="https://avatars2.githubusercontent.com/u/1422971?s=120&v=4"
          alt="André Almeida"
        />
        <div>
          <strong>github-explorer</strong>
          <p>Explorador do github</p>
        </div>
        <FiChevronRight size={20} />
      </a>

      <a href="repository">
        <img
          src="https://avatars2.githubusercontent.com/u/1422971?s=120&v=4"
          alt="André Almeida"
        />
        <div>
          <strong>github-explorer</strong>
          <p>Explorador do github</p>
        </div>
        <FiChevronRight size={20} />
      </a>

      <a href="repository">
        <img
          src="https://avatars2.githubusercontent.com/u/1422971?s=120&v=4"
          alt="André Almeida"
        />
        <div>
          <strong>github-explorer</strong>
          <p>Explorador do github</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);
export default Dashboard;
