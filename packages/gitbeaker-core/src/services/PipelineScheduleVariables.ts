import { BaseService } from '@gitbeaker/requester-utils';
import { BaseRequestOptions, PaginatedRequestOptions, RequestHelper } from '../infrastructure';

export class PipelineScheduleVariables<C extends boolean> extends BaseService<C> {
  all(projectId: string | number, pipelineScheduleId: number, options?: PaginatedRequestOptions) {
    const [pId, psId] = [projectId, pipelineScheduleId].map(encodeURIComponent);

    return RequestHelper.get<C>(
      this,
      `projects/${pId}/pipeline_schedules/${psId}/variables`,
      options,
    );
  }

  create(projectId: string | number, pipelineScheduleId: number, options?: BaseRequestOptions) {
    const [pId, psId] = [projectId, pipelineScheduleId].map(encodeURIComponent);

    return RequestHelper.post<C>(
      this,
      `projects/${pId}/pipeline_schedules/${psId}/variables`,
      options,
    );
  }

  edit(
    projectId: string | number,
    pipelineScheduleId: number,
    keyId: string,
    options?: BaseRequestOptions,
  ) {
    const [pId, psId, kId] = [projectId, pipelineScheduleId, keyId].map(encodeURIComponent);

    return RequestHelper.put<C>(
      this,
      `projects/${pId}/pipeline_schedules/${psId}/variables/${kId}`,
      options,
    );
  }

  show(
    projectId: string | number,
    pipelineScheduleId: number,
    keyId: string,
    options?: BaseRequestOptions,
  ) {
    const [pId, psId, kId] = [projectId, pipelineScheduleId, keyId].map(encodeURIComponent);

    return RequestHelper.get<C>(
      this,
      `projects/${pId}/pipeline_schedules/${psId}/variables/${kId}`,
      options,
    );
  }

  remove(
    projectId: string | number,
    pipelineScheduleId: number,
    keyId: string,
    options?: BaseRequestOptions,
  ) {
    const [pId, psId, kId] = [projectId, pipelineScheduleId, keyId].map(encodeURIComponent);

    return RequestHelper.del<C>(
      this,
      `projects/${pId}/pipeline_schedules/${psId}/variables/${kId}`,
      options,
    );
  }
}
