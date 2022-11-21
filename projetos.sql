-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 09-Nov-2022 às 09:03
-- Versão do servidor: 5.7.40
-- versão do PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `fetecpir_fetec`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `projetos`
--

CREATE TABLE `projetos` (
  `PROCODIGO` int(11) NOT NULL,
  `PRONOME` varchar(200) DEFAULT NULL,
  `PROEIXO` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `projetos`
--

INSERT INTO `projetos` (`PROCODIGO`, `PRONOME`, `PROEIXO`) VALUES
(1, 'Alarme Residencial com Aplicativo', 'Tecnologia Industrial'),
(2, 'App de Avaliação dos Projetos da FETEC', 'Informática  '),
(3, 'Aranha Robô', 'Tecnologia Industrial'),
(4, 'Área de Recreação Kids', 'Turismo, Hospitalidade e Lazer'),
(5, 'Arquitetura Escolar', 'Informática  '),
(6, 'Automatização Residencial', 'Tecnologia Industrial'),
(7, 'Bem-Vindo ao Sistema Solar', 'Linguagens, Ciências Humanas, Exatas e da Natureza'),
(8, 'Bobina de Tesla Rítmica', 'Tecnologia Industrial'),
(9, 'Botox: A Ciência e a Indústria da Beleza', 'Linguagens, Ciências Humanas, Exatas e da Natureza'),
(10, 'Bracelete Reabilitador', 'Tecnologia Industrial'),
(11, 'Caixa Sensorial', 'Linguagens, Ciências Humanas, Exatas e da Natureza'),
(12, 'Carolinas Gourmet', 'Gestão e Negócios'),
(13, 'Centro Tec Meteorológico', 'Tecnologia Industrial'),
(14, 'Cofre Secreto', 'Tecnologia Industrial'),
(15, 'Copa do Bem', 'Cultura e Ação Social'),
(16, 'Criança Feliz', 'Cultura e Ação Social'),
(17, 'Desafio dos Sentidos', 'Linguagens, Ciências Humanas, Exatas e da Natureza'),
(18, 'Detect Metaltec', 'Tecnologia Industrial'),
(19, 'Dissecação', 'Linguagens, Ciências Humanas, Exatas e da Natureza'),
(20, 'Doces da Realeza', 'Gestão e Negócios'),
(21, 'Doguinhos', 'Gestão e Negócios'),
(22, 'ECU Test3 Infinity', 'Informática'),
(23, 'Electric MidiaTec', 'Turismo, Hospitalidade e Lazer'),
(24, 'Envasadora de Suco Automatizada', 'Tecnologia Industrial'),
(25, 'Esteira Seletora de Peças', 'Tecnologia Industrial'),
(26, 'EZday', 'Informática  '),
(27, 'Fiesta La Pizza', 'Gestão e Negócios'),
(28, 'Fliperama', 'Informática  '),
(29, 'Garra Fofucha Eletromagnética', 'Tecnologia Industrial'),
(30, 'Ilusão de Óptica', 'Linguagens, Ciências Humanas, Exatas e da Natureza'),
(31, 'Intelligent Eyes', 'Tecnologia Industrial'),
(32, 'Jornal Etec', 'Linguagens, Ciências Humanas, Exatas e da Natureza'),
(33, 'Kabbum Electric Connect', 'Tecnologia Industrial'),
(34, 'Labirinto Elétrico', 'Tecnologia Industrial'),
(35, 'Lembrancinha com Material Reciclável', 'Cultura e Ação Social '),
(36, 'Lixeira Consciente', 'Tecnologia Industrial'),
(37, 'Maquete Oficina Elétrica', 'Tecnologia Industrial'),
(38, 'Micro-estação Meteorológica', 'Tecnologia Industrial'),
(39, 'Mini Radar', 'Tecnologia Industrial'),
(40, 'Monitoramento e Irrigação Automatizada do Solo', 'Tecnologia Industrial '),
(41, 'Oficina de Artes', 'Linguagens, Ciências Humanas, Exatas e da Natureza'),
(42, 'Olhos em Alerta', 'Tecnologia Industrial'),
(43, 'Parentes verdejantes', 'Linguagens, Ciências Humanas, Exatas e da Natureza'),
(44, 'Party Ice', 'Gestão e Negócios'),
(45, 'Pista de Corrida de LED', 'Tecnologia Industrial'),
(46, 'Pote do Amor', 'Gestão e Negócios'),
(47, 'Recepção', 'Linguagens, Ciências Humanas, Exatas e da Natureza'),
(48, 'Saúde em Dia', 'Linguagens, Ciências Humanas, Exatas e da Natureza'),
(49, 'Seta Assertiva', 'Tecnologia Industrial'),
(50, 'Sistema de Projeto da FETEC', 'Informática  '),
(51, 'Small Electric Car', 'Tecnologia Industrial'),
(52, 'Teste Vocacional', 'Gestão e Negócios'),
(53, 'Tornado Luminoso', 'Linguagens, Ciências Humanas, Exatas e da Natureza'),
(54, 'Trash Collector', 'Tecnologia Industrial'),
(55, 'Uma Trilha de Leds', 'Tecnologia Industrial'),
(56, 'Urna Eletrônica', 'Informática'),
(57, 'X-Espeto', 'Gestão e Negócios');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `projetos`
--
ALTER TABLE `projetos`
  ADD PRIMARY KEY (`PROCODIGO`),
  ADD UNIQUE KEY `PRONOME` (`PRONOME`),
  ADD KEY `PROEIXO` (`PROEIXO`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `projetos`
--
ALTER TABLE `projetos`
  MODIFY `PROCODIGO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
