import { FormikProps, Field } from 'formik';
import React, { useContext } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { AppSettingsFormValues } from '../AppSettings.types';
import { PermissionsContext } from '../Contexts';
import TextField from '../../../../components/form-controls/TextField';

const DailyUsageQuota: React.FC<FormikProps<AppSettingsFormValues> & WithTranslation> = props => {
  const { t, values, initialValues } = props;
  const { app_write, editable } = useContext(PermissionsContext);

  if (!values.site) {
    return null;
  }

  return (
    <>
      <Field
        name="site.properties.dailyMemoryTimeQuota"
        dirty={values.site.properties.dailyMemoryTimeQuota !== initialValues.site.properties.dailyMemoryTimeQuota}
        component={TextField}
        label={t('dailyUsageQuotaLabel')}
        id="app-settings-daily-memory-time-quota"
        disabled={!app_write || !editable}
        style={{ marginLeft: '1px', marginTop: '1px' }}
      />
      {!values.site.properties.enabled && values.site.properties.siteDisabledReason === 1 && <div>WARNING</div>}
    </>
  );
};

export default withTranslation('translation')(DailyUsageQuota);