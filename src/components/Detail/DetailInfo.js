import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { List } from 'antd';

import DetailInfoItem from './DetailInfoItem';
import DetailInfoHeader from './DetailInfoHeader';
import { selectorDetail } from '../../reducers/detail';

class DetailInfo extends PureComponent {
  getDataSource = () => {
    const {
      detail: {
        movie: {
          budget,
          genres,
          overview,
          popularity,
          production_companies,
          production_countries,
          release_date,
          runtime,
          spoken_languages,
          status,
          vote_average,
          vote_count,
        },
      },
    } = this.props;

    const dataSource = [
      {
        key: 'budget',
        label: 'Budget',
        type: 'currency',
        value: budget,
      },
      {
        key: 'genres',
        label: 'Genres',
        type: 'array',
        value: genres,
      },
      {
        key: 'overview',
        label: 'Overview',
        type: 'text',
        value: overview,
      },
      {
        key: 'popularity',
        label: 'Popularity',
        type: 'number',
        value: popularity,
      },
      {
        key: 'production_companies',
        label: 'Prod. companies',
        type: 'array',
        value: production_companies,
      },
      {
        key: 'production_countries',
        label: 'Prod. countries',
        type: 'array',
        value: production_countries,
      },
      {
        key: 'release_date',
        label: 'Release date',
        type: 'date',
        value: release_date,
      },
      {
        key: 'runtime',
        label: 'Runtime',
        type: 'time',
        value: runtime,
      },
      {
        key: 'spoken_languages',
        label: 'Spoken languages',
        type: 'array',
        value: spoken_languages,
      },
      {
        key: 'status',
        label: 'Status',
        type: 'text',
        value: status,
      },
      {
        key: 'vote_average',
        label: 'Vote average',
        type: 'number',
        value: vote_average,
      },
      {
        key: 'vote_count',
        label: 'Vote count',
        type: 'number',
        value: vote_count,
      },
    ];

    return dataSource;
  };

  render() {
    const {
      detail: {
        movie: { tagline, title },
      },
    } = this.props;
    const dataSource = this.getDataSource();

    return (
      <List
        header={<DetailInfoHeader title={title} tagline={tagline} />}
        size="medium"
        dataSource={dataSource}
        renderItem={item => <DetailInfoItem>{item}</DetailInfoItem>}
      />
    );
  }
}

const mapStateToProps = state => {
  return { detail: selectorDetail(state) };
};

export default connect(mapStateToProps)(DetailInfo);